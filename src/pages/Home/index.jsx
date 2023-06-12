import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Home.module.css'

function Home() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    fetch('/data/logements.json')
      .then((response) => response.json())
      .then((data) => setProperties(data))
  }, [])

  return (
    <div className={styles['grid-container']}>
      {properties.map((property) => (
        <Card key={property.id} property={property} />
      ))}
    </div>
  )
}

export default Home
