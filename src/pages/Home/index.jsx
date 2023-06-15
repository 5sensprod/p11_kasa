import React, { useContext, useEffect } from 'react'
import { MarginBottomContext } from '../../contexts/MarginBottomContext'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import styles from './Home.module.css'
import homeBackground from '../../assets/bg-sea-min.png'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading'

/**
 * Le composant Home est utilisé pour afficher la page d'accueil.
 * Il utilise le composant Banner pour afficher une grande image d'en-tête.
 * Il utilise ensuite le composant Card pour afficher une liste de propriétés.
 */
function Home() {
  const { setMarginBottomSize } = useContext(MarginBottomContext)
  const properties = useFetch('/data/logements.json') // Utilisation du hook personnalisé, l'adresse est passée en argument

  useEffect(() => {
    setMarginBottomSize('large')
  }, [setMarginBottomSize])

  if (!properties) {
    return <Loading /> // Retourne le composant de chargement s'il n'y a pas encore de données
  }

  return (
    <main className={styles.homeMain}>
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
  )
}

export default Home
