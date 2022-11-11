import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../EditUser/style.css'

export default function EditUser () {
  const data = useLocation()
  const navigate = useNavigate()
  //   console.log('data :>> ', data.state)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')
  const [bio, setBio] = useState('')
  const [emailID, setEmailID] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')

  const handleEditButton = (e, id) => {
    axios.put(`https://6364ac837b209ece0f4b06db.mockapi.io/employee-list/${id}`, {
      firstName, lastName, password, jobTitle, country, address, bio, emailID, mobileNumber
    })
      .then((res) => {
        console.log('res.data', res.data)
      })
      .catch((err) => {
        console.log('err :>> ', err)
      })
  }

  return (
    <div className='edit'>
        <form>
          <h1>Edit Page</h1>
          <table cellPadding={5}>
            <tbody>
            <tr>
              <td>
                <label>Name</label>
              </td>
              <td>
                <input type='text' name='firstName' id='firstName' value={data.state.firstName} onChange={(e) => setFirstName(e.target.value)} />
              </td>
              <td>
                <input type='text' name='lastName' id='lastName' value={data.state.lastName} onChange={(e) => setLastName(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='password' id='password' value={data.state.password} onChange={(e) => setPassword(e.target.value)} />
              </td>
            </tr>
            {/* <tr>
              <td>
                <label>Gender</label>
              </td>
              <td>
                <input type='radio' name='gender' id='gender' value={data.state.gender} /> Male
              </td>
              <td>
                <input type='radio' name='gender' id='gender' value={data.state.gender} /> Female
              </td>
            </tr> */}
            <tr>
              <td>
                <label>Job Title</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='jobTtile' id='jobTtile' value={data.state.jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Country</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='country' id='country' value={data.state.country} onChange={(e) => setCountry(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Address</label>
              </td>
              <td colSpan={2}>
                <textarea rows={5} value={data.state.address} onChange={(e) => setAddress(e.target.value)}></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label>Bio</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='bio' id='bio' value={data.state.bio} onChange={(e) => setBio(e.target.value)} />
              </td>
            </tr>
            {/* <tr>
              <td>
                <label>Profile</label>
              </td>
              <td colSpan={2}>
                <input type='file' name='profileImg' id='profileImg' />
              </td>
            </tr> */}
            <tr>
              <td>
                <label>Email ID</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='emailID' id='emailID' value={data.state.emailID} onChange={(e) => setEmailID(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Mobile Number</label>
              </td>
              <td colSpan={2}>
                <input type='text' name='mobileNumber' id='mobileNumber' value={data.state.mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type='button' onClick={(e) => handleEditButton(e, data.state.id)}>Edit</button>
              </td>
              <td><button type='button' className='cancel' onClick={(e) => navigate('/user')}>Cancel</button></td>
            </tr>
            </tbody>
          </table>
        </form>
    </div>
  )
}
