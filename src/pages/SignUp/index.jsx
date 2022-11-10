import React, { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../SignUp/style.css'

export default function SignUp () {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    gender: '',
    jobTtile: '',
    country: '',
    bio: '',
    profileImg: '',
    emailID: '',
    mobileNumber: ''
  })

  const [details, setDetails] = useState([])
  const handleChange = (e) => {
    const { name, value } = e.target

    setUserData({ ...userData, [name]: value })
  }
  const handleSubmitButton = useCallback(
    (e) => {
      e.preventDefault()
      if (userData.pwd !== userData.cpwd) {
        alert('Password Mismatched.')
      } else {
        const newDetails = { ...userData }
        setDetails(details => [...details, newDetails])
        setUserData(userData)

        localStorage.setItem('Registered Local Details', JSON.stringify([...details, newDetails]))
        sessionStorage.setItem('Registered Session Details', JSON.stringify([...details, newDetails]))
        console.log('Details : ', newDetails)
        navigate('/')
      }
    },
    [userData]
  )
  //   const getData = JSON.parse(localStorage.getItem('Registered Local Details'))
  //   console.log('getData', getData)
  //   useEffect(() => {
  //     localStorage.setItem('details', JSON.stringify(details))
  //   }, [details])
  //   console.log('fname: ', userData.fname)

  //   const [setItems] = useState([])
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('Registered Local Details'))
    console.log('getData: ', items)
    if (items) {
      setDetails(items)
    }
  }, [])
  return (
    <>
      <div className='registration'>
        <form onSubmit={(e) => handleSubmitButton(e)}>
          <h1>Registration Page</h1>
          <table cellPadding={5}>
            <tbody>
            <tr>
              <td>
                <label>Name</label>
              </td>
              <td>
                <input type='text' name='firstName' id='firstName' onChange={(e) => handleChange(e)} />
              </td>
              <td>
                <input type='text' name='lastName' id='lastName' onChange={(e) => handleChange(e)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='password' id='password' onChange={(e) => handleChange(e)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Gender</label>
              </td>
              <td>
                <input type='radio' name='gender' id='gender' onChange={(e) => handleChange(e)} /> Male
              </td>
              <td>
                <input type='radio' name='gender' id='gender' onChange={(e) => handleChange(e)} /> Female
              </td>
            </tr>
            <tr>
              <td>
                <label>Job Title</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='jobTtile' id='jobTtile' onChange={(e) => handleChange(e)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Country</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='country' id='country' onChange={(e) => handleChange(e)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Address</label>
              </td>
              <td colSpan={2}>
                <textarea rows={5}></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label>Bio</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='bio' id='bio' onChange={(e) => handleChange(e)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Profile</label>
              </td>
              <td colSpan={2}>
                <input type='file' name='profileImg' id='profileImg' onChange={(e) => handleChange(e)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email ID</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='emailID' id='emailID' onChange={(e) => handleChange(e)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Mobile Number</label>
              </td>
              <td colSpan={2}>
                <input type='number' name='mobileNumber' id='mobileNumber' onChange={(e) => handleChange(e)} />
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <button type='submit'>Save</button>
              </td>
            </tr>
            </tbody>
          </table>
          <div className='bottom'>
              <p>Already have an Account? <Link to='/'>Login</Link></p>
          </div>
        </form>
    </div>
    </>
  )
}
