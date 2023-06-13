import React from 'react'
import PropTypes from 'prop-types'
import styles from './HostInfo.module.css'

/**
 * Le composant HostInfo est utilisé pour afficher des informations sur l'hôte.
 * Il affiche le nom de l'hôte et une image associée.
 * Il accepte un objet host en props, qui doit contenir les propriétés 'name' (une chaîne) et 'picture' (une URL de l'image).
 */
function HostInfo({ host }) {
  return (
    <div className={styles.hostInfo}>
      <div className={styles.name}>
        <div>{host.name.split(' ')[0]}</div>
        <div>{host.name.split(' ')[1]}</div>
      </div>
      <img src={host.picture} alt={host.name} className={styles.picture} />
    </div>
  )
}

HostInfo.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
}

export default HostInfo
