import { site } from './config.js'

export default function About() {
  return (
    <main className="page">
      <header className="head nar">
        <h1>About</h1>
      </header>
      <div className="prose nar">
        {site.about.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <div className="nar">
        <h2 className="sub">How these stories are held</h2>
        <ul className="rules">
          {site.rules.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
        <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
      </div>
    </main>
  )
}
