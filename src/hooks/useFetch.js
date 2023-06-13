import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useFetch(url, id, redirectOnError = '/not-found') {
  const [data, setData] = useState(id ? null : [])
  const navigate = useNavigate() // useNavigate doit être appelé dans le corps de la fonction du composant

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données")
        }
        return response.json()
      })
      .then((items) => {
        if (id) {
          const selectedItem = items.find((item) => item.id === id)
          if (!selectedItem) {
            navigate(redirectOnError)
          } else {
            setData(selectedItem)
          }
        } else {
          setData(items)
        }
      })
      .catch((error) => {
        console.error('Erreur : ', error)
        navigate(redirectOnError)
      })
  }, [url, id, navigate, redirectOnError])

  return data
}
