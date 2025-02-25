import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/home'
import About from './components/about'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </>
  )
}

export default App
