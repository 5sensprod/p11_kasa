import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './Dropdown.module.css'
import chevron from '../../assets/chevron-down.svg'

function AnimateHeight({ isOpen, children }) {
  const [height, setHeight] = useState(isOpen ? 'auto' : '0')
  const contentRef = useRef(null)

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0')
  }, [isOpen])

  return (
    <div
      ref={contentRef}
      className={styles.dropdownContent}
      style={{ height: height }}
    >
      {children}
    </div>
  )
}

AnimateHeight.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

/**
 * Composant pour afficher la liste déroulante
 *  Accepte les props isList, description et listFontSize
 *  isList détermine si description est une liste ou une simple string
 *  listFontSize définit la taille de la police pour la liste
 */
function DropdownList({ isList, description, listFontSize }) {
  return (
    <ul
      className={styles.dropdownList}
      style={{ fontSize: listFontSize || '18px' }}
    >
      {isList
        ? description.map((item) => <li key={item}>{item}</li>) // Utilisation une combinaison de la valeur de l'item et de son index pour créer une clé unique même en cas de doublons dans la liste.
        : description}
    </ul>
  )
}

DropdownList.propTypes = {
  isList: PropTypes.bool,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  listFontSize: PropTypes.string,
}

// Composant pour le bouton déroulant
// Accepte les props title, titleFontSize, isOpen et setIsOpen
function DropdownButton({
  title,
  titleFontSize,
  isOpen,
  setIsOpen,
  rotate,
  setRotate,
}) {
  return (
    <button
      className={styles.dropdownButton}
      onClick={() => {
        setIsOpen(!isOpen)
        setRotate(!rotate)
      }}
      aria-expanded={isOpen}
    >
      <span
        className={styles.title}
        style={{ fontSize: titleFontSize || '18px' }}
      >
        {title}
      </span>
      <img
        src={chevron}
        alt="chevron"
        className={`${styles.chevron} ${rotate ? styles.rotate : ''}`}
      />
    </button>
  )
}

DropdownButton.propTypes = {
  title: PropTypes.string.isRequired,
  titleFontSize: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  rotate: PropTypes.bool.isRequired,
  setRotate: PropTypes.func.isRequired,
}

// Composant principal pour Dropdown
// Accepte les props title, description, isList, titleFontSize et listFontSize
function Dropdown({ title, description, isList, titleFontSize, listFontSize }) {
  const [isOpen, setIsOpen] = useState(false)
  const [rotate, setRotate] = useState(false)

  return (
    <div className={styles.dropdown}>
      <DropdownButton
        title={title}
        titleFontSize={titleFontSize}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        rotate={rotate}
        setRotate={setRotate}
      />
      <AnimateHeight isOpen={isOpen}>
        <DropdownList
          isList={isList}
          description={description}
          listFontSize={listFontSize}
        />
      </AnimateHeight>
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    // description peut être une string ou un tableau de strings

    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  isList: PropTypes.bool,
  titleFontSize: PropTypes.string,
  listFontSize: PropTypes.string,
}

export default Dropdown
