import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import styles from './Home.module.css'
import homeBackground from '../../assets/bg-sea-min.png'

function Home() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    fetch('/data/logements.json')
      .then((response) => response.json())
      .then((data) => setProperties(data))
  }, [])

  return (
    <>
      <Banner
        title="Chez vous, partout et ailleurs"
        backgroundImage={homeBackground}
        visible={true}
      />
      <div className={styles['grid-container']}>
        {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </>
  )
}

export default Home
