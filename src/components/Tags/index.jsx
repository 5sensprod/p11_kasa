import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tags.module.css'

/**
 * Tags est un composant qui prend un tableau de chaînes de caractères (tags) en entrée et affiche chaque tag dans un conteneur séparé.
 */
function Tags({ tags, className }) {
  if (!Array.isArray(tags) || tags.some((tag) => typeof tag !== 'string')) {
    throw new Error("Prop 'tags' must be an array of strings")
  }

  return (
    <div className={`${styles.tagContainer} ${className}`}>
      {tags.map((tag, index) => (
        <div key={`${tag}-${index}`} className={styles.tag}>
          {tag}
        </div>
      ))}
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
}

export default Tags
