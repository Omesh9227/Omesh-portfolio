import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

const App = () => (
  <>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] btn btn-primary"
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

export default App
