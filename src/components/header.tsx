import * as React from 'react'
import './header.scss'


export function Header() {
  return (
    <div className="header">
      <div className="navigation-modal__content__menu">
        <ul className="navigation-modal__content__list">
          <li className="navigation-modal__content__list-item navigation-modal__content__list-item--active">Home</li>
          <li className="navigation-modal__content__list-item">Quiénes Somos</li>
          <li className="navigation-modal__content__list-item">Servicios</li>
          <li className="navigation-modal__content__list-item">Capacitaciones</li>
          <li className="navigation-modal__content__list-item">Contacto</li>
        </ul>
      </div>
    </div>
  )
}