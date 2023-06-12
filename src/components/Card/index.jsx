import React from 'react'
import './Card.module.css'

const Card = ({ property }) => {
  return (
    <div className="card">
      <img src={property.cover} alt={property.title} className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{property.title}</h2>
        <p className="card-location">{property.location}</p>
        <div className="card-tags">
          {property.tags.map((tag, index) => (
            <span key={index} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
