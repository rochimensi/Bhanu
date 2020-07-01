import * as React from 'react'
import './intro.scss'
import { Image } from './image'
import imageSrc from '../assets/intro.jpeg'

export function Intro() {
  return (
    <>
    <div className="intro">
      <Image src={imageSrc} alt="Bienestar"/>
      <div className="intro__text">
        <div className="intro__text__wrapper">
          <span className="intro__title">Espacio dedicado a la Belleza Integral y el Bienestar del SER</span>
          <span className="intro__subtitle">compartiendo conocimientos y experiencias que puedan enriquecer el crecimiento personal</span>
        </div>
      </div>
    </div>
    </>
  )
}