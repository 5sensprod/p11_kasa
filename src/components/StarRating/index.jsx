import React from 'react'
import styles from './StarRating.module.css'
import star from '../../assets/star.svg'
import starRed from '../../assets/star_red.svg'

function StarRating({ rating }) {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_starItem, i) => {
        const ratingValue = i + 1
        return (
          <img
            key={i}
            src={ratingValue <= rating ? starRed : star}
            alt="star"
            className={styles.star}
          />
        )
      })}
    </div>
  )
}

export default StarRating
