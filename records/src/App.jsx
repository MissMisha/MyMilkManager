import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import React from 'react'
import Dashboard from './Components/Dashboard'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar';
import Login from './Components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Landing></Landing>}> </Route>
        <Route path="/signup" element={<><Navbar></Navbar><Form></Form></>}></Route>
        <Route path="/login" element={<><Navbar></Navbar><Login></Login></>}></Route>
      </Routes>
    </Router>
      {/* <Form></Form> */}
      
      {/* <Dashboard></Dashboard> */}
    </>
  )
}

export default App
