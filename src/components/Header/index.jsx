import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

// Header est un composant qui représente l'en-tête du site.

function Header({ marginBottomSize }) {
  let marginBottomClass

  switch (marginBottomSize) {
    case 'small':
      marginBottomClass = styles.headerMarginSmall
      break
    case 'medium':
      marginBottomClass = styles.headerMarginMedium
      break
    case 'large':
      marginBottomClass = styles.headerMarginLarge
      break
    default:
      marginBottomClass = styles.headerMarginSmall
      break
  }

  return (
    <header className={`${styles.headerContainer} ${marginBottomClass}`}>
      <Link to="/">
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
      </Link>
      <nav className={styles.links}>
        <Link to="/" className={styles.link}>
          Accueil
        </Link>
        <Link to="/about" className={styles.link}>
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
