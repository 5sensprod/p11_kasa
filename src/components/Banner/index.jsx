import React from 'react'
import styles from './Banner.module.css'

function Banner() {
  const title = 'Chez vous, partout et ailleurs'
  return (
    <div className={styles.bannerContainer}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default Banner
