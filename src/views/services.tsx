import * as React from 'react'
import { Carousel } from '../components/carousel'
import './services.scss'

export function Services() {
  return (
    <div className="homepage-services">
      <div className="homepage-services__summary">
        <h2>Tratamientos Holísticos para transformar tu energía</h2>
        <ul className="homepage-services__list">
          <li className="homepage-services__list-item">Terapias Complementarias</li>
          <li className="homepage-services__list-item">Relax</li>
          <li className="homepage-services__list-item">Belleza Corporal</li>
          <li className="homepage-services__list-item">Belleza Facial</li>
          <li className="homepage-services__list-item">Capacitaciones</li>
        </ul>
      </div>
      <div className="homepage-services__carousel">
        <Carousel />
      </div>
    </div>
  )
}