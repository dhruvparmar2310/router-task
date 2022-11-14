import React from 'react'
import '../src/assets/css/main.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import EditUser from './pages/EditUser'
import Home from './pages/Home'
import Protected from './shared/components/Protected'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Protected ComponentProps={Home} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/user/add-user' element={<SignUp />} />
          <Route path='/*' element={<Navigate to='/' />}/>
          <Route path='/dashboard' element={<Protected ComponentProps={Dashboard} />} />
          <Route path='/user' element={<Protected ComponentProps={User} />} />
          <Route path='/user/edit-user' element={<EditUser />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
