import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Housing.module.css'
import Dropdown from '../../components/Dropdown'

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
    <div className={styles.housingContainer}>
      <img
        src={property.cover}
        alt={property.title}
        className={styles.imgHousing}
      />
      <h1 className={styles.title}>{property.title}</h1>
      <p className={styles.location}>{property.location}</p>
      <div className={styles.dropdownContainer}>
        <Dropdown title="Description" description={property.description} />
        <Dropdown
          title="Équipements"
          description={property.equipments}
          isList={true}
        />
      </div>
    </div>
  )
}

export default Housing
