import React, { useState } from 'react'

function Dropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <h2>{title}</h2>
      {isOpen && <p>{description}</p>}
    </div>
  )
}

export default Dropdown
