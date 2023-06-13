import React from 'react'
import logo from '../../assets/logo_white.svg'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <span className={styles.footerText}>
        © 2023 Kasa. All rights reserved
      </span>
    </footer>
  )
}

export default Footer
