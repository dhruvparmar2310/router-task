import React, { useState, useCallback, useRef } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Login () {
  const navigate = useNavigate()

  // it is similar to useState and it will not re-render again
  const emailID = useRef(null)
  const password = useRef(null)

  const [userLoginData, setUserLoginData] = useState({
    emailID: '',
    password: ''
  })
  const getData = JSON.parse(localStorage.getItem('Registered Local Details'))
  console.log('getOldData: ', getData)

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('Registered Session Details'))
  //   console.log('getLoginData', items)
  //   if (items) {
  //     setLoginDetails(items)
  //   }
  // }, [])

  const [loginDetails, setLoginDetails] = useState([])
  const handleChange = (e) => {
    const { name, value } = e.target

    setUserLoginData({ ...userLoginData, [name]: value })
  }

  const [show, setShow] = useState(false)
  const handleSubmitButton = useCallback(
    (e) => {
      e.preventDefault()
      const newDetails = { ...userLoginData }

      // demo of useRef
      const emailId = emailID.current.value
      const pwd = password.current.value
      console.log('show', show)

      emailId === '' && pwd === '' ? alert('Please enter the Email ID and Password.') : setShow(true)

      setLoginDetails([...loginDetails, newDetails])

      setUserLoginData(userLoginData)
      // localStorage.getItem('Login Data', JSON.stringify([...loginDetails, newDetails]))
      // console.log('Login Details : ', newDetails)

      // console.log('newDetails.email :>> ', newDetails.email, ', newDetails.pwd :>> ', newDetails.pwd)
      // console.log('getData.email :>> ', getData[0].email, ', getData.pwd :>> ', getData[0].pwd)
      if (getData === null) {
        alert('User does not Exist.')
      } else {
        const storeLoginData = getData.find((element) =>
          element.emailID === userLoginData.emailID
        )
        if (storeLoginData.password === userLoginData.password) {
          sessionStorage.setItem('email', storeLoginData.emailid)
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
      <form onSubmit={(e) => handleSubmitButton(e)}>
        <h1>Login Page</h1>
        <div className='row'>
            <label>Username</label>
            <input type='email' value={userLoginData.emailID} name='emailID' id='emailID' ref={emailID} onChange={(e) => handleChange(e)} />
        </div>
        <div className='row'>
            <label>Password</label>
            <input type='password' value={userLoginData.password} name='password' id='password' ref={password} onChange={(e) => handleChange(e)} />
        </div>
        <div className='row'>
            <button type='submit'>Login</button>
        </div>
        <div className='bottom'>
            <p>Don&apos;t  have an Account? <Link to='/sign-up'>Sign</Link></p>
        </div>
      </form>
    </div>
  )
}
