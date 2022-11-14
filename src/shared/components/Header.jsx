import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header () {
  const navigate = useNavigate()
  const handleLogout = (e) => {
    sessionStorage.clear()
    navigate('/')
  }
  return (
    <div>
      <div className='side-menu'>
        <nav>
          <ul>
          <li><Link to='/'>Home</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><button onClick={(e) => handleLogout(e)}>Logout</button></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
