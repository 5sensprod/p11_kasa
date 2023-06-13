import React from 'react'
import PropTypes from 'prop-types'
import styles from './StarRating.module.css'
import star from '../../assets/star.svg'
import starRed from '../../assets/star_red.svg'

/**
 * StarRating affiche une évaluation sous forme d'étoiles.
 */
function StarRating({ rating }) {
  // si rating est undefined ou null, traiter cela comme un 0
  const normalizedRating = rating ?? 0

  return (
    <div className={styles.stars}>
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
}

export default StarRating
