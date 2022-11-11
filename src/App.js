import React from 'react'
import '../src/assets/css/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import EditUser from './pages/EditUser'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user' element={<User />} />
          <Route path='/edit-user' element={<EditUser />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
