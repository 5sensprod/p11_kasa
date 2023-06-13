import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound({
  message = "Oups ! La page que vous demandez n'existe pas.",
  returnLink = '/',
}) {
  return (
    <main className={styles.error}>
      <p className={styles.errorCode}>404</p>
      <p className={styles.errorMessage}>{message}</p>
      <p className={styles.errorBackLink}>
        <Link to={returnLink}>Retourner sur la page d'accueil</Link>
      </p>
    </main>
  )
}

export default NotFound
