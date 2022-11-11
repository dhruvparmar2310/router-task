import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../shared/components/Header'
import '../Dashboard/style.css'

export default function Dashboard () {
  const [data, setData] = useState([])
  const users = data.length

  const getData = () => {
    axios.get('https://6364ac837b209ece0f4b06db.mockapi.io/employee-list')
      .then((res) => {
        setData(res.data)
        console.log('Get Data from Api :>> ', res.data)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const male = data.filter((item) => item.gender === 'Male')
  const countMale = male.length

  const female = data.filter((item) => item.gender === 'Female')
  const countFemale = female.length

  return (
    <div className='dashboard'>
      <Header /><hr/>
      <div className='statistic'>
        <p>Statistic</p>
        <p>Total Users : {users}</p>
        <p>Total Males : {countMale}</p>
        <p>Total Females : {countFemale}</p>
      </div>
    </div>
  )
}
