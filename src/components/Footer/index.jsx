import React from 'react'
import logo from '../../assets/logo_white.svg'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <span className={styles.footerText}>
        © 2023 Kasa. All rights reserved
      </span>
    </div>
  )
}

export default Footer
