import { useState, useEffect } from 'react';

/**
 * Ce hook personnalisé renvoie true si la fenêtre du navigateur est de 768px ou moins.
 * Il utilise un écouteur d'événement 'resize' pour mettre à jour l'état si la taille de la fenêtre change.
 * @returns {boolean} true si l'écran est de taille mobile, false sinon.
 */
export default function useIsMobile() {
  // définit la valeur par défaut
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // se déclenche lorsque la taille de la fenêtre change
  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return isMobile;
}
