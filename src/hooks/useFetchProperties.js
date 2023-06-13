import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useFetchProperties(id) {
  const [data, setData] = useState(id ? null : [])
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/data/logements.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données")
        }
        return response.json()
      })
      .then((properties) => {
        if(id){
          const selectedProperty = properties.find((property) => property.id === id)
          if (!selectedProperty) {
            navigate('/not-found')
          } else {
            setData(selectedProperty)
          }
        } else {
          setData(properties)
        }
      })
      .catch((error) => {
        console.error('Erreur : ', error)
        navigate('/not-found')
      })
  }, [id, navigate])

  return data
}
