import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Slideshow.module.css'
import PrevSVG from '../../assets/prev.svg'
import NextSVG from '../../assets/next.svg'

/**
 * Le composant Slideshow est utilisé pour afficher un diaporama d'images.
 * Il accepte un tableau de chaînes (pictures) en props, qui sont des URL d'images.
 * Il utilise l'état pour garder une trace de la diapositive actuelle.
 * Des boutons permettent de passer à la diapositive suivante ou précédente.
 * Si il n'y a qu'une seule image, les boutons de navigation ne seront pas affichés.
 */
function Slideshow({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === pictures.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? pictures.length - 1 : prev - 1))
  }

  return (
    <div className={styles.slideshow}>
      {pictures.map((imgUrl, index) => (
        <div
          className={`${styles.slide} ${
            index === currentSlide ? styles.active : ''
          }`}
          key={index}
        >
          <img src={imgUrl} alt={`Slide ${index}`} />
        </div>
      ))}
      {pictures.length > 1 && (
        <div>
          <button className={styles.prev} onClick={prevSlide}>
            <img src={PrevSVG} alt="Previous" />
          </button>
          <button className={styles.next} onClick={nextSlide}>
            <img src={NextSVG} alt="Next" />
          </button>
          <div className={styles.slideNumber}>
            {currentSlide + 1}/{pictures.length}
          </div>
        </div>
      )}
    </div>
  )
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Slideshow
