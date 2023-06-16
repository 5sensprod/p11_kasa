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
      <Slideshow pictures={property.pictures} />
      <div className={styles.infoContainer}>
        <div className={styles.titleAndLocation}>
          <h1 className={styles.title}>{property.title}</h1>
          <p className={styles.location}>{property.location}</p>
        </div>
        <HostInfo host={property.host} />
        <Tags tags={property.tags} />
        <StarRating rating={parseInt(property.rating)} />
      </div>
      <div className={styles.dropdownContainer}>
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
      </div>
    </main>
  )
}

export default Housing
