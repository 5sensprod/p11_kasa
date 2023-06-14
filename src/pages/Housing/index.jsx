import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Housing.module.css'
import Dropdown from '../../components/Dropdown'
import Tags from '../../components/Tags'
import StarRating from '../../components/StarRating'
import HostInfo from '../../components/HostInfo'
import Slideshow from '../../components/Slideshow'
import useFetch from '../../hooks/useFetch'

/**
 * Le composant Housing est utilisé pour afficher les détails d'un logement spécifique.
 * Il utilise les composants Slideshow, Tags, StarRating, HostInfo et Dropdown pour afficher différentes informations sur le logement.
 * Il récupère l'identifiant du logement de l'URL grâce à 'useParams' et utilise le hook personnalisé 'useFetch' pour récupérer les données du logement.
 */
function Housing() {
  const { id } = useParams()
  const property = useFetch('/data/logements.json', id)

  if (!property) {
    return null
  }

  return (
    <main className={styles.housingContainer}>
      <Slideshow pictures={property.pictures} />
      <h1 className={styles.title}>{property.title}</h1>
      <p className={styles.location}>{property.location}</p>
      <Tags tags={property.tags} />
      <StarRating rating={parseInt(property.rating)} />
      <HostInfo host={property.host} />
      <div className={styles.dropdownContainer}>
        <Dropdown title="Description" description={property.description} />
        <Dropdown
          title="Équipements"
          description={property.equipments}
          isList={true}
        />
      </div>
    </main>
  )
}

export default Housing
