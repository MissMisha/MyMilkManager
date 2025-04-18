import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    {/* Navbar */}
    <header className="flex items-center justify-between px-8 py-4  bg-white shadow">
    <div className="text-2xl font-bold text-indigo-600">DairyDash</div>
    <nav className="space-x-4">
      <a href="#features" className="text-gray-700 hover:text-indigo-600"><Link to="/">Home</Link></a>
      <a href="#login" className="text-gray-700 hover:text-indigo-600"><Link to="/login">Login</Link></a>
      <a href="#signup" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-500"><Link to="/signup">Sign Up</Link></a>
    </nav>
  </header>
  </>
  )
}

export default Navbar