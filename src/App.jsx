import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { initEffects } from './lib/effects'

const App = () => {
  useEffect(() => initEffects(), [])

  return (
  <>
    <div aria-hidden className="scroll-progress" />
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] btn btn-green"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main">
      <Home />
    </main>
    <Footer />
  </>
  )
}

export default App
