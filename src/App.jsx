import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/views/Header'
import Footer from './components/views/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='root-div'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
