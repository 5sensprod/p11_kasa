import React from 'react'
import Dropdown from '../../components/Dropdown'
import Banner from '../../components/Banner'
import aboutBackground from '../../assets/bg-montain-min.png'
import aboutInfo from '../../data/aboutInfo'
import styles from './About.module.css'

function About() {
  return (
    <>
      <Banner
        title="Chez vous, partout et ailleurs"
        backgroundImage={aboutBackground}
        visible={false}
      />
      <main className={styles.about}>
        <div className={styles.dropdownContainer}>
          {aboutInfo.map((section, index) => (
            <Dropdown
              key={index}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default About
