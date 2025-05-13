import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

function App() {
  return (
    <div className='bg-cyan-950 text-blue-50'>
    <Navbar/>
    <Hero/>
    <Skills/>
    </div>
  )
}

export default App
