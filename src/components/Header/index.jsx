import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'

// Header est un composant qui représente l'en-tête du site.
function Header({ marginBottomSize }) {
  let marginBottomClass
  let location = useLocation()

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
      <NavLink to="/">
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
      </NavLink>
      <nav className={styles.links}>
        <NavLink
          to="/"
          className={
            location.pathname === '/' ? styles.activeLink : styles.link
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={
            location.pathname === '/about' ? styles.activeLink : styles.link
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
