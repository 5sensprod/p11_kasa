import React from 'react'
import styles from './HostInfo.module.css'

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

export default HostInfo
