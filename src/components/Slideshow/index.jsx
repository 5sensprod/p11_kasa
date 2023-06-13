import React, { useState } from 'react'
import styles from './Slideshow.module.css'

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
            &#10094;
          </button>
          <button className={styles.next} onClick={nextSlide}>
            &#10095;
          </button>
          <div className={styles.slideNumber}>
            {currentSlide + 1} / {pictures.length}
          </div>
        </div>
      )}
    </div>
  )
}

export default Slideshow
