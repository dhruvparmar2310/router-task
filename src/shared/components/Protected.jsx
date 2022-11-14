import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function Protected (props) {
  const { ComponentProps } = props
  const navigate = useNavigate()
  useEffect(() => {
    const login = sessionStorage.getItem('email')
    if (!login) {
      navigate('/login')
    }
  })

  return (
    <div>
      <ComponentProps />
    </div>
  )
}

Protected.propTypes = {
  ComponentProps: PropTypes.func
}
export default Protected
