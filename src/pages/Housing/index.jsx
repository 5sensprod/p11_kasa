import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Housing() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)

  useEffect(() => {
    // Remplacez par la véritable API ou le chemin du fichier json
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
    <div>
      {/* Ici vous pouvez rendre votre UI pour le logement en utilisant les données dans `property` */}
      <h1>{property.title}</h1>
      <img src={property.cover} alt={property.title} />
      <p>{property.description}</p>
      {/* Vous devrez probablement rendre plus de détails ici */}
    </div>
  )
}

export default Housing
