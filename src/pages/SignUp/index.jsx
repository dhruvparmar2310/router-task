/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../SignUp/style.css'

export default function SignUp () {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState(true)
  const [jobTitle, setJobTitle] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')
  const [bio, setBio] = useState('')
  const [profileImg, setProfileImg] = useState('')
  const [emailID, setEmailID] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')

  const handleSaveButton = (e) => {
    e.preventDefault()
    axios.post('https://6364ac837b209ece0f4b06db.mockapi.io/employee-list', {
      firstName, lastName, password, gender, jobTitle, country, address, bio, profileImg, emailID, mobileNumber
    })
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  return (
    <>
      <div className='registration'>
        <form>
          <h1>Registration Page</h1>
          <table cellPadding={5}>
            <tbody>
            <tr>
              <td>
                <label>Name</label>
              </td>
              <td>
                <input type='text' name='firstName' id='firstName' onChange={(e) => setFirstName(e.target.value)} />
              </td>
              <td>
                <input type='text' name='lastName' id='lastName' onChange={(e) => setLastName(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='password' id='password' onChange={(e) => setPassword(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Gender</label>
              </td>
              <td>
                <input type='radio' name='gender' id='gender' onChange={(e) => setGender(e.target.value)} /> Male
              </td>
              <td>
                <input type='radio' name='gender' id='gender' onChange={(e) => setGender(e.target.value)} /> Female
              </td>
            </tr>
            <tr>
              <td>
                <label>Job Title</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='jobTtile' id='jobTtile' onChange={(e) => setJobTitle(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Country</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='country' id='country' onChange={(e) => setCountry(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Address</label>
              </td>
              <td colSpan={2}>
                <textarea rows={5} onChange={(e) => setAddress(e.target.value)}></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label>Bio</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='bio' id='bio' onChange={(e) => setBio(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Profile</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='profileImg' id='profileImg' onChange={(e) => setProfileImg(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email ID</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='emailID' id='emailID' onChange={(e) => setEmailID(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Mobile Number</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='mobileNumber' id='mobileNumber' onChange={(e) => setMobileNumber(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <button type='button' onClick={(e) => handleSaveButton(e)}>Save</button>
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
