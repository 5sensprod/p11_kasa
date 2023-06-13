import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'

function Card({ property }) {
  return (
    <article className={styles.card}>
      <Link to={`/housing/${property.id}`} className={styles.card}>
        <img
          src={property.cover}
          alt={property.title}
          className={styles.cardImage}
        />
        <div className={styles.cardBody}>
          <h2 className={styles.cardTitle}>{property.title}</h2>
        </div>
      </Link>
    </article>
  )
}

export default Card
