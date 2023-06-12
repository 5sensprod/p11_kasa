import React from 'react'
import styles from './Card.module.css'

function Card({ property }) {
  return (
    <article className={styles.card}>
      <img
        src={property.cover}
        alt={property.title}
        className={styles.cardImage}
      />
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{property.title}</h2>
      </div>
    </article>
  )
}

export default Card
