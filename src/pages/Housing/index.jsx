import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Housing.module.css'
import Dropdown from '../../components/Dropdown'
import Tags from '../../components/Tags'
import StarRating from '../../components/StarRating'
import HostInfo from '../../components/HostInfo'
import Slideshow from '../../components/Slideshow'
import useFetchProperties from '../../hooks/useFetchProperties' // Modification ici

function Housing() {
  const { id } = useParams()
  const property = useFetchProperties(id) // Modification ici

  if (!property) {
    return null
  }

  return (
    <main className={styles.housingContainer}>
      <Slideshow pictures={property.pictures} />
      <h1 className={styles.title}>{property.title}</h1>
      <p className={styles.location}>{property.location}</p>
      <Tags tags={property.tags} />
      <StarRating rating={property.rating} />
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
