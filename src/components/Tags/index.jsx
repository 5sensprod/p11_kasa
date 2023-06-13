import React from 'react'
import styles from './Tags.module.css'

function Tags({ tags }) {
  return (
    <div className={styles.tagContainer}>
      {tags.map((tag) => (
        <div key={tag} className={styles.tag}>
          {tag}
        </div>
      ))}
    </div>
  )
}

export default Tags
