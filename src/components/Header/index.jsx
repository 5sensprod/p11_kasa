import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

// Header est un composant qui représente l'en-tête du site.

function Header() {
  return (
    <header className={styles.headerContainer}>
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
