import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Login from './components/Login'
import Creds from './components/Creds'
import { Route , Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>-=-=-=-=-ATTENDANCE CALCULATOR-=-=-=-=-</h1>
      <Navbar/>
      <Routes>
        <Route path = "/login" element = {<Login />} />
        <Route path = "/creds" element = {<Creds />} />
      </Routes>
    </>
  )
}

export default App
