import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        
        <AnimatePresence mode="wait">
          <main className="relative">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </AnimatePresence>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
