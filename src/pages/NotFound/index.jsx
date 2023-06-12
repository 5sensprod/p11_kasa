import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <main className={styles.error}>
      <p className={styles.errorCode}>404</p>

      <p className={styles.errorMessage}>
        Oups ! La page que vous demandez n'existe pas.
      </p>

      <p className={styles.errorBackLink}>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </p>
    </main>
  )
}

export default NotFound
