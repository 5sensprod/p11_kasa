import React, { useState } from 'react'
import styles from './Dropdown.module.css'
import chevronDown from '../../assets/chevron-down.svg'
import chevronUp from '../../assets/chevron-up.svg'

function DropdownList({ isList, description, listFontSize }) {
  return (
    <ul
      className={styles.dropdownList}
      style={{ fontSize: listFontSize || '18px' }}
    >
      {isList
        ? description.map((item) => <li key={item}>{item}</li>)
        : description}
    </ul>
  )
}

function DropdownButton({ title, titleFontSize, isOpen, setIsOpen }) {
  return (
    <button
      className={styles.dropdownButton}
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
    >
      <span
        className={styles.title}
        style={{ fontSize: titleFontSize || '18px' }}
      >
        {title}
      </span>
      <img
        src={isOpen ? chevronUp : chevronDown}
        alt="chevron"
        className={styles.chevron}
      />
    </button>
  )
}

function Dropdown({ title, description, isList, titleFontSize, listFontSize }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.dropdown}>
      <DropdownButton
        title={title}
        titleFontSize={titleFontSize}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {isOpen && (
        <DropdownList
          isList={isList}
          description={description}
          listFontSize={listFontSize}
        />
      )}
    </div>
  )
}

export default Dropdown
