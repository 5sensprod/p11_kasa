import React, { useState } from 'react'
import styles from './Dropdown.module.css'
import chevronDown from '../../assets/chevron-down.svg'
import chevronUp from '../../assets/chevron-up.svg'

function Dropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.title}>{title}</span>
        <img
          src={isOpen ? chevronUp : chevronDown}
          alt="chevron"
          className={styles.chevron}
        />
      </button>
      {isOpen && <div className={styles.description}>{description}</div>}
    </div>
  )
}

export default Dropdown
