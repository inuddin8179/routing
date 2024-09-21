import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
       <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
