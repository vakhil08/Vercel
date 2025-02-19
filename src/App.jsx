import { useState } from 'react'
import './App.css'
import Home from './hOME.JSX'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
