import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './Housing.module.css'
import Dropdown from '../../components/Dropdown'
import Tags from '../../components/Tags'
import StarRating from '../../components/StarRating'
import HostInfo from '../../components/HostInfo'
import Slideshow from '../../components/Slideshow'

function Housing() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/data/logements.json`)
      .then((response) => response.json())
      .then((data) => {
        const selectedProperty = data.find((property) => property.id === id)
        if (!selectedProperty) {
          navigate('/not-found')
        } else {
          setProperty(selectedProperty)
        }
      })
  }, [id, navigate])

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
