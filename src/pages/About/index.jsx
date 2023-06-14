import React from 'react'
import Dropdown from '../../components/Dropdown'
import Banner from '../../components/Banner'
import aboutBackground from '../../assets/bg-montain-min.png'
import aboutInfo from '../../data/aboutInfo'
import styles from './About.module.css'

/**
 * Le composant About est utilisé pour afficher la page À propos.
 * Il utilise le composant Banner pour afficher une grande image d'en-tête.
 * Il utilise ensuite le composant Dropdown pour afficher une série de sections d'informations.
 */
function About() {
  return (
    <main className={styles.about}>
      <Banner
        title="Chez vous, partout et ailleurs"
        backgroundImage={aboutBackground}
        visible={false}
      />
      <div className={styles.dropdownContainer}>
        {aboutInfo.map((section) => (
          <Dropdown
            key={section.title}
            title={section.title}
            description={section.description}
            titleFontSize="24px"
            listFontSize="24px"
          />
        ))}
      </div>
    </main>
  )
}

export default About
