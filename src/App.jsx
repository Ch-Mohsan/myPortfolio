import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d1e4a] via-[#7F00FF] to-[#4C00A4] text-[#EDEDED]">
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
