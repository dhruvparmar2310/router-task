import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <div>
      <div className='side-menu'>
        <nav>
          <ul>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/'>Logout</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
