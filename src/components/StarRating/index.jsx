import React from 'react'
import PropTypes from 'prop-types'
import styles from './StarRating.module.css'
import star from '../../assets/star.png'
import starRed from '../../assets/star_red.png'

/**
 * StarRating affiche une évaluation sous forme d'étoiles.
 */
function StarRating({ rating, className }) {
  // si rating est undefined ou null, traiter cela comme un 0
  const normalizedRating = rating ?? 0

  return (
    <div className={`${styles.stars} ${className}`}>
      {[...Array(5)].map((_starItem, i) => {
        const ratingValue = i + 1
        return (
          <img
            key={i}
            src={ratingValue <= normalizedRating ? starRed : star}
            alt="star"
            className={styles.star}
          />
        )
      })}
    </div>
  )
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string,
}

export default StarRating
