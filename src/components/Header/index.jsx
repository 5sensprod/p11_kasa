import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <h1> HEADER</h1>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/listing">Liste des logements</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header