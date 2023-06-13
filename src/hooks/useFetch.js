/**
 * useFetch est un hook personnalisé pour effectuer une requête fetch à une URL spécifiée.
 * Il prend trois paramètres : url, id et redirectOnError.
 * url est l'URL à laquelle la requête est effectuée.
 * id est l'identifiant de l'élément spécifique à récupérer.
 * redirectOnError est l'URL de redirection en cas d'erreur lors de la récupération des données.
 *
 * Le hook utilise useState pour garder une trace des données récupérées et useNavigate pour naviguer vers une autre page en cas d'erreur.
 * Il renvoie les données récupérées.
 *
 * Si un id est spécifié, le hook cherche l'élément avec cet id dans les données récupérées.
 * Si l'élément est trouvé, il est défini comme état. Sinon, l'utilisateur est redirigé vers la page spécifiée par redirectOnError.
 *
 * En cas d'erreur lors de la récupération des données, l'utilisateur est également redirigé vers la page spécifiée par redirectOnError.
 */
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