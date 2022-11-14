import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../User/style.css'
import Header from '../../shared/components/Header'
import { useNavigate } from 'react-router-dom'

export default function User () {
  const [getApiData, setApiData] = useState([])
  const [searchItem, setSearchItem] = useState('')
  const [searchData, setSearchData] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [filterData, setFilterData] = useState('all')
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
    if (filterData === true) {
      const filter = (data) => data.filter((item) => item.gender === 'Male')
      setApiData(filter)
    } else if (filterData === false) {
      const filter = (data) => data.filter((item) => item.gender === 'Female')
      setApiData(filter)
    } else {
      getData()
    }
  }, [filterData])

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
    navigate('/user/edit-user', { state: data })
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

  const handleAddUser = (e) => {
    navigate('/user/add-user')
  }

  // logic for search
  const handleSearch = (e) => {
    setSearchItem('')
    const lowerCase = e.target.value.toLowerCase()
    setSearchData(lowerCase)
  }

  const filteredData = getApiData.filter((object) => {
    return object.firstName.toLowerCase().includes(searchItem)
  })

  const handleSearchButton = (e) => {
    setSearchItem(searchData)
  }

  // logic for filter
  const handleFilter = (e) => {
    const { value } = e.target
    console.log('value :>> ', value);
    (value === 'true') ? setFilterData(true) : value === 'false' ? setFilterData(false) : setFilterData('all')
  }
  console.log('filterData :>> ', filterData)

  return (
    <>
    <Header /><hr/>

    <input type="text" id='searchbar' onChange={(e) => handleSearch(e)} placeholder="Search bar" />
    <button onClick={(e) => handleSearchButton(e)}>Search</button>
    <button onClick={(e) => handleAddUser(e)}>Add User</button><br/><br/>
    <label style={{ margin: '10px' }}>Filter</label>
    <select value={filterData} onChange={(e) => handleFilter(e)}>
      <option value={'all'}>All</option>
      <option value={true}>Male</option>
      <option value={false}>Female</option>
    </select>
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
        {filteredData.map((data, index) => {
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
                <td>{data.status ? 'true' : 'false'}</td>
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
