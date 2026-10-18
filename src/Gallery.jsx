import { site } from './config.js'
import { stories } from './stories.js'

const VERB = { video: 'watch', audio: 'listen', text: 'read', image: 'look' }
const verbs = (s) => [...new Set(s.blocks.map((b) => VERB[b.type]).filter(Boolean))].join(', ')

export default function Gallery() {
  return (
    <main className="wrap">
      <section className="hero">
        <h1>{site.title}</h1>
        <p>{site.tagline}</p>
        <p className="whole">Photographs are always shown whole, never cropped.</p>
      </section>

      {stories.length === 0 ? (
        <p className="empty">No stories yet. Add the first one in src/stories.js.</p>
      ) : (
        <ul className="stories">
          {stories.map((s, i) => (
            <li className="tile" key={s.slug}>
              <a href={`#/story/${s.slug}`}>
                {s.cover ? (
                  <img className="frame" src={s.cover} alt={s.coverAlt || ''} loading="lazy" />
                ) : (
                  <div
                    className="frame ph"
                    style={{ aspectRatio: s.ratio || '4/5', '--x': 20 + ((i * 37) % 60), '--y': 15 + ((i * 53) % 70) }}
                  />
                )}
                <span className="code">{s.code}</span>
                <span className="t">{s.title}</span>
                <span className="m">{s.teller}, {s.year}. {verbs(s)}.</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
