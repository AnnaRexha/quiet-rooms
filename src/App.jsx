import { useEffect, useState } from 'react'
import { site } from './config.js'
import Gallery from './Gallery.jsx'
import Story from './Story.jsx'
import About from './About.jsx'

function useRoute() {
  const read = () => location.hash.replace(/^#\/?/, '').split('/').filter(Boolean)
  const [parts, setParts] = useState(read)
  useEffect(() => {
    const onChange = () => {
      setParts(read())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return parts
}

export default function App() {
  const [section, slug] = useRoute()
  let page
  if (section === 'story') page = <Story slug={slug} />
  else if (section === 'about') page = <About />
  else page = <Gallery />

  return (
    <>
      <header className="bar">
        <span>{section ? site.title : ''}</span>
        <nav>
          <a href="#/" aria-current={!section ? 'page' : undefined}>stories</a>
          <a href="#/about" aria-current={section === 'about' ? 'page' : undefined}>about</a>
        </nav>
      </header>
      {page}
    </>
  )
}
