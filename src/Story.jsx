import { useState } from 'react'
import { site } from './config.js'
import { stories } from './stories.js'

function Video({ b }) {
  const title = b.title || 'Video'
  const embed = (src) => (
    <div className="film">
      <iframe src={src} title={title} allow="fullscreen; picture-in-picture" allowFullScreen />
    </div>
  )
  if (b.provider === 'youtube' && b.id) return embed(`https://www.youtube-nocookie.com/embed/${b.id}`)
  if (b.provider === 'vimeo' && b.id) return embed(`https://player.vimeo.com/video/${b.id}`)
  if (b.provider === 'file' && b.src)
    return (
      <div className="film">
        <video controls preload="metadata" poster={b.poster} aria-label={title}>
          <source src={b.src} />
          {b.captions && <track kind="captions" src={b.captions} srcLang="en" label="English" default />}
        </video>
      </div>
    )
  return null
}

function Transcript({ t }) {
  const [tab, setTab] = useState('en')
  const paras = (s) => s.split('\n\n').map((p, i) => <p key={i}>{p}</p>)
  const obj = typeof t === 'string' ? { en: t } : t
  return (
    <details>
      <summary>Read the transcript</summary>
      {obj.original && (
        <div className="tabs">
          <button aria-pressed={tab === 'en'} onClick={() => setTab('en')}>English</button>
          <button aria-pressed={tab === 'o'} onClick={() => setTab('o')}>Original</button>
        </div>
      )}
      <div className="tx" lang={tab === 'o' ? obj.lang : undefined}>
        {paras(tab === 'o' && obj.original ? obj.original : obj.en)}
      </div>
      <p className="key">… hesitation. [inaudible, timecode] unclear. […] a cut, made with the teller’s agreement.</p>
    </details>
  )
}

function TextTabs({ b }) {
  const [tab, setTab] = useState('en')
  const paras = (s) => s.split('\n\n').map((p, i) => <p key={i} className={b.lines ? 'lines' : undefined}>{p}</p>)
  return (
    <div className="prose nar">
      <div className="tabs">
        <button aria-pressed={tab === 'en'} onClick={() => setTab('en')}>English</button>
        <button aria-pressed={tab === 'o'} onClick={() => setTab('o')}>Original</button>
      </div>
      <div lang={tab === 'o' ? b.lang : undefined}>{paras(tab === 'o' ? b.original : b.body)}</div>
    </div>
  )
}

function Block({ b }) {
  switch (b.type) {
    case 'text':
      if (b.original) return <TextTabs b={b} />
      return <div className="prose nar">{b.body.split('\n\n').map((p, i) => <p key={i} className={b.lines ? 'lines' : undefined}>{p}</p>)}</div>
    case 'image':
      return (
        <figure className="photo">
          {b.src ? (
            <img className="frame" src={b.src} alt={b.alt || ''} loading="lazy" />
          ) : (
            <div className="frame ph" style={{ aspectRatio: b.ratio || '3/2', '--x': 35, '--y': 40 }} role="img" aria-label={b.alt || ''} />
          )}
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      )
    case 'audio':
      return (
        <div className="audio nar">
          {b.src && <audio controls preload="none" src={b.src} />}
          {b.transcript && <Transcript t={b.transcript} />}
        </div>
      )
    case 'video':
      return <Video b={b} />
    default:
      return null
  }
}

export default function Story({ slug }) {
  const i = stories.findIndex((s) => s.slug === slug)
  const s = stories[i]
  if (!s)
    return (
      <main className="page">
        <p className="empty">That story is not here. <a href="#/">See all stories</a></p>
      </main>
    )
  const next = stories[(i + 1) % stories.length]
  const subject = encodeURIComponent(`Withdraw ${s.code}`)

  return (
    <main className="page" key={s.slug}>
      <header className="head nar">
        <span className="code">{s.code}</span>
        <h1>{s.title}</h1>
        <p className="meta">Told by {s.teller}{s.place ? `, ${s.place}` : ''}. {s.year}.</p>
        {s.intro && <p className="lede">{s.intro}</p>}
      </header>

      {s.blocks.map((b, n) => (
        <Block b={b} key={n} />
      ))}

      <aside className="care nar">
        <h2>How this story is held</h2>
        <dl>
          <dt>Consent</dt>
          <dd>Given, and reviewed {s.reviewed}</dd>
          <dt>Told as</dt>
          <dd>{s.told}</dd>
          <dt>Editing</dt>
          <dd>{s.editing || 'Light edit for readability. Cuts are marked.'}</dd>
          <dt>Translation</dt>
          <dd>{s.translation || 'None. Shown in the original language.'}</dd>
        </dl>
        <p>
          <a href={`mailto:${site.email}?subject=${subject}`}>Ask to withdraw this story</a>. No reason needed.
        </p>
        <p className="cite">Cite as: “{s.code}, {s.title}”</p>
      </aside>

      {stories.length > 1 && (
        <p className="next nar">
          <a href={`#/story/${next.slug}`}>Next: {next.title}</a>
        </p>
      )}
    </main>
  )
}
