import React from 'react'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import styles from './Home.module.css'
import homeBackground from '../../assets/bg-sea-min.png'
import useFetch from '../../hooks/useFetch'

function Home() {
  const properties = useFetch('/data/logements.json') // Utilisation du hook personnalisé l'adresse est passée en argument

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
