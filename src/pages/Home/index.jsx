import React from 'react'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import styles from './Home.module.css'
import homeBackground from '../../assets/bg-sea-min.png'
import useFetchProperties from '../../hooks/useFetchProperties'

function Home() {
  const properties = useFetchProperties() // Utilisation du hook personnalisé

  return (
    <>
      <main>
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
      </main>
    </>
  )
}

export default Home
