import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signupp from './components/Signupp'
import Login from './components/login'
import Main from './components/Main'
import Admin from './components/Admin'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
       <Route path='/s' element={<Signupp/>}/>
       <Route path='/' element={<Login/>}/>
       <Route path='/a' element={<Main data={<Admin/>}/>}/>
       <Route path='/p' element={<Main data = {<Products/>}/>}/>

       

      </Routes>
    </>
  )
}

export default App
