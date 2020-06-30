import * as React from 'react'
import './header.scss'


export function Header() {
  return (
    <div className="header">
      <ul className="header__content__list">
        <li className="header__content__list-item"><a>Home</a></li>
        <li className="header__content__list-item"><a>Quiénes Somos</a></li>
        <li className="header__content__list-item"><a>Servicios</a></li>
        <li className="header__content__list-item"><a>Capacitaciones</a></li>
        <li className="header__content__list-item"><a>Contacto</a></li>
      </ul>
    </div>
  )
}