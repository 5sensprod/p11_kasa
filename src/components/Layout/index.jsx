import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import styles from './Layout.module.css'

function Layout({ children, marginBottomSize }) {
  return (
    <>
      <div className={styles.layoutContainer}>
        <Header marginBottomSize={marginBottomSize} />
        {children}
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  marginBottomSize: PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Layout
