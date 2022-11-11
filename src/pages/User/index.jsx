import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../User/style.css'
import Header from '../../shared/components/Header'
import { useNavigate } from 'react-router-dom'

export default function User () {
  const [getApiData, setApiData] = useState([])
  const [sortOrder, setSortOrder] = useState('asc')
  const navigate = useNavigate()
  const getData = () => {
    axios.get('https://6364ac837b209ece0f4b06db.mockapi.io/employee-list')
      .then((res) => {
        setApiData(res.data)
        console.log(' Get Data from Api :>> ', res.data)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  const handleDeleteButton = (e, id) => {
    console.log('id', id)
    axios.delete(`https://6364ac837b209ece0f4b06db.mockapi.io/employee-list/${id}`)
      .then((res) => {
        console.log('Deleted Data :>> ', res.data)
      })
      .then(() => {
        getData()
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  const handleEditButton = (e, data, id) => {
    // console.log('data :>> ', data)
    navigate('/edit-user', { state: data })
  }

  const handleSort = (data) => {
    if (sortOrder === 'asc') {
      const sorted = [...getApiData].sort((a, b) => {
        return (
          a[data].toLowerCase() > b[data].toLowerCase() ? 1 : -1
        )
      })
      setApiData(sorted)
      setSortOrder('desc')
    } else if (sortOrder === 'desc') {
      const sorted = [...getApiData].sort((a, b) => {
        return (
          a[data].toLowerCase() > b[data].toLowerCase() ? 1 : -1
        )
      })
      setApiData(sorted)
      setSortOrder('asc')
    }
  }

  return (
    <>
    <Header /><hr/>

    <input type="text" id='searchbar' onChange={(e) => setApiData(e.target.value)} placeholder="Search bar" />
    <div className='user'>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('firstName')} style={{ cursor: 'pointer' }}>Name</th>
            <th>Password</th>
            <th onClick={() => handleSort('gender')} style={{ cursor: 'pointer' }}>Gender</th>
            <th onClick={() => handleSort('jobTitle')} style={{ cursor: 'pointer' }}>Job Title</th>
            <th onClick={() => handleSort('country')} style={{ cursor: 'pointer' }}>Country</th>
            <th>Address</th>
            <th>Bio</th>
            <th>Email ID</th>
            <th>Mobile Number</th>
            <th>Status</th>
            <th>Profile Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {getApiData.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <tr>
                <td>{data.firstName} {data.lastName}</td>
                <td>{data.password}</td>
                <td>{data.gender}</td>
                <td>{data.jobTitle}</td>
                <td>{data.country}</td>
                <td>{data.address}</td>
                <td>{data.bio}</td>
                <td>{data.emailID}</td>
                <td>{data.mobileNumber}</td>
                <td>{data.status}</td>
                <td>
                  <img src={data.profileImg} />
                </td>
                <td><button onClick={(e) => handleEditButton(e, data, data.id)}>Edit</button></td>
                <td><button onClick={(e) => handleDeleteButton(e, data.id)}>Delete</button></td>
              </tr>
            </React.Fragment>
          )
        })}
        </tbody>
      </table>
    </div>
    </>
  )
}
