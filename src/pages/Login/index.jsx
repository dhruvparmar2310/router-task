import React, { useState, useCallback, useEffect } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login () {
  const navigate = useNavigate()
  const [userData, setUserData] = useState([])

  useEffect(() => {
    axios.get('https://6364ac837b209ece0f4b06db.mockapi.io/employee-list')
      .then((res) => {
        setUserData(res.data)
        console.log(' Get Data from Api :>> ', res.data)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }, [])

  const [userLoginData, setUserLoginData] = useState({
    emailID: '',
    password: ''
  })

  const [loginDetails, setLoginDetails] = useState([])
  const handleChange = (e) => {
    const { name, value } = e.target

    setUserLoginData({ ...userLoginData, [name]: value })
  }
  // console.log('userLoginData', userLoginData)

  const handleLoginButton = useCallback(
    (e) => {
      e.preventDefault()
      const newDetails = { ...userLoginData }

      setLoginDetails([...loginDetails, newDetails])
      setUserLoginData(userLoginData)

      if (userData === null) {
        alert('User does not Exist.')
      } else {
        const storeLoginData = userData.find((element) =>
          element.emailID === userLoginData.emailID
        )
        if (storeLoginData.password === userLoginData.password) {
          sessionStorage.setItem('email', storeLoginData.emailID)
          sessionStorage.setItem('password', storeLoginData.password)
          navigate('/dashBoard')
        } else {
          alert('Invalid Email or Passwrord.')
        }
      }
    },
    [userLoginData, setLoginDetails]
  )

  return (
    <div className='login container'>
      <form>
        <h1>Login Page</h1>
        <div className='row'>
            <label>Username</label>
            <input type='email' value={userLoginData.emailID} name='emailID' id='emailID' onChange={(e) => handleChange(e)} />
        </div>
        <div className='row'>
            <label>Password</label>
            <input type='password' value={userLoginData.password} name='password' id='password' onChange={(e) => handleChange(e)} />
        </div>
        <div className='row'>
            <button type='button' onClick={(e) => handleLoginButton(e)}>Login</button>
        </div>
        <div className='bottom'>
            <p>Don&apos;t  have an Account? <Link to='/sign-up'>Sign</Link></p>
        </div>
      </form>
    </div>
  )
}
