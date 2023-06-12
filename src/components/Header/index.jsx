import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
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
