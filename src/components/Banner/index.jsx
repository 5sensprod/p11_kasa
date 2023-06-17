import React from 'react'
import PropTypes from 'prop-types'
import styles from './Banner.module.css'

function Banner({ title, backgroundImage, visible, className }) {
  // Définir le style de la bannière avec une image de fond
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  }

  return (
    // Utilisation du style de bannière défini ci-dessus
    // Afficher le titre si la prop 'visible' est true
    <div
      className={`${styles.bannerContainer} ${className}`}
      style={bannerStyle}
    >
      {visible && <h1 className={styles.title}>{title}</h1>}
    </div>
  )
}

// Ajout de PropTypes pour le composant Banner
Banner.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

export default Banner
