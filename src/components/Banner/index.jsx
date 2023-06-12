import React from 'react'
import styles from './Banner.module.css'

function Banner({ title, backgroundImage, visible }) {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  }

  return (
    <div className={styles.bannerContainer} style={bannerStyle}>
      {visible && <h1 className={styles.title}>{title}</h1>}
    </div>
  )
}

export default Banner
