/* eslint-disable react/prop-types */
import React from 'react'


const Input = ({ name, placeholder, value, setValue }) => {
  const handleInput = (event) => {
    event.preventDefault()
    setValue(event.target.value)
  }

  return (
    <input
      className="w-full px-3 py-2 rounded-lg border-2 border-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none"
      name={name}
      placeholder={placeholder}
      value={value} // value bergantung langsung dengan state value dari onChange
      onChange={handleInput}
    />
  )
}

export default Input
