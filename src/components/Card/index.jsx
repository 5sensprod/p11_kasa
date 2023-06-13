import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'

function Card({ property }) {
  return (
    // Chaque carte est un lien vers une page détaillée de la propriété.
    // L'image de couverture et le titre de la propriété sont affichés.
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

// Ajout de PropTypes pour le composant Card
// Il attend un objet contenant "id", "cover", et "title"
Card.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card
