import React, { useState } from 'react'
import styles from './Dropdown.module.css'
import chevronDown from '../../assets/chevron-down.svg'
import chevronUp from '../../assets/chevron-up.svg'

function Dropdown({ title, description, isList }) {
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
      {isOpen && (
        <ul className={styles.dropdownList}>
          {isList
            ? description.map((item) => <li key={item}>{item}</li>)
            : description}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
