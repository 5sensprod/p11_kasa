import React from 'react'
import logo from '../../assets/logo_white.png'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

// Footer est un composant qui représente le pied de page du site.

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footerContainer}>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <span className={styles.footerText}>
        © {currentYear} Kasa. All rights reserved
      </span>
    </footer>
  )
}

export default Footer
