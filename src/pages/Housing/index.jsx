import React, { useContext, useEffect } from 'react'
import { MarginBottomContext } from '../../contexts/MarginBottomContext'
import { useParams } from 'react-router-dom'
import styles from './Housing.module.css'
import Dropdown from '../../components/Dropdown'
import Tags from '../../components/Tags'
import StarRating from '../../components/StarRating'
import HostInfo from '../../components/HostInfo'
import Slideshow from '../../components/Slideshow'
import useFetch from '../../hooks/useFetch'
import useIsMobile from '../../hooks/useIsMobile'

/**
 * Le composant Housing est utilisé pour afficher les détails d'un logement spécifique.
 * Il utilise les composants Slideshow, Tags, StarRating, HostInfo et Dropdown pour afficher différentes informations sur le logement.
 * Il récupère l'identifiant du logement de l'URL grâce à 'useParams' et utilise le hook personnalisé 'useFetch' pour récupérer les données du logement.
 */
function Housing() {
  const { id } = useParams()
  const property = useFetch(
    'https://raw.githubusercontent.com/5sensprod/p11_kasa/main/public/data/logements.json',
    id
  )
  const isMobile = useIsMobile()
  const { setMarginBottomSize } = useContext(MarginBottomContext)

  useEffect(() => {
    setMarginBottomSize('small')
  }, [setMarginBottomSize])

  if (!property) {
    return null
  }

  return (
    <main className={styles.housingContainer}>
      <section aria-label="Diaporama">
        <Slideshow pictures={property.pictures} />
      </section>
      <section className={styles.infoContainer}>
        <h1 className={styles.title}>{property.title}</h1>
        <p className={styles.location}>{property.location}</p>

        <HostInfo host={property.host} className={styles.hostInfo} />
        <Tags tags={property.tags} className={styles.tags} />
        <StarRating
          rating={parseInt(property.rating)}
          className={styles.starRating}
        />
      </section>
      <section
        className={styles.dropdownContainer}
        aria-label="Plus d'informations"
      >
        <Dropdown
          title="Description"
          description={property.description}
          titleFontSize={isMobile ? '13px' : '18px'}
          listFontSize={isMobile ? '12px' : '18px'}
        />
        <Dropdown
          title="Équipements"
          description={property.equipments}
          isList={true}
          titleFontSize={isMobile ? '13px' : '18px'}
          listFontSize={isMobile ? '12px' : '18px'}
        />
      </section>
    </main>
  )
}

export default Housing
