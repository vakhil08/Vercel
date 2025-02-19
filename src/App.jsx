import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Insta from './Insta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/insta" element={<Insta/>}/>
     </Routes>
    </>
  )
}

export default App
