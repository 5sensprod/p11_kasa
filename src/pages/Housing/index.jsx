import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Housing.module.css'
import Dropdown from '../../components/Dropdown'
import Tags from '../../components/Tags'
import StarRating from '../../components/StarRating'
import HostInfo from '../../components/HostInfo'

function Housing() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)

  useEffect(() => {
    fetch(`/data/logements.json`)
      .then((response) => response.json())
      .then((data) => {
        const selectedProperty = data.find((property) => property.id === id)
        setProperty(selectedProperty)
      })
  }, [id])

  if (!property) {
    return <div>Loading...</div>
  }

  return (
    <main className={styles.housingContainer}>
      <img
        src={property.cover}
        alt={property.title}
        className={styles.imgHousing}
      />
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
