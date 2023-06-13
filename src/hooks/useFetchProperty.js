import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useFetchProperty(id) {
  const [property, setProperty] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/data/logements.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données")
        }
        return response.json()
      })
      .then((data) => {
        const selectedProperty = data.find((property) => property.id === id)
        if (!selectedProperty) {
          navigate('/not-found')
        } else {
          setProperty(selectedProperty)
        }
      })
      .catch((error) => {
        console.error('Erreur : ', error)
        navigate('/not-found')
      })
  }, [id, navigate])

  return property
}