import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Adbar from './components/Adbar'
import Electronics from './components/Electronics'
import Insert from './components/Insert'
import View from './components/View'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/home' element = { <Adbar/> }></Route>
        <Route path='/electronics' element = { <Electronics/> }></Route>
        <Route path='/add' element = { <Insert/> }></Route>
        <Route path='/view' element = { <View/> }></Route>
        <Route path='/login' element ={ <Login/>}></Route>
         <Route path='/Signup' element ={ <Signup/>}></Route>
      </Routes>
    </>
  )
}

export default App