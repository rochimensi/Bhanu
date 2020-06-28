import * as React from 'react'
import './hero.scss'
import { Brand } from './brand'
import { Circle } from './circle'
import { Logo } from './logo'

export function Hero() {
  return (
    <div className="hero">
      <span className="svg-container slide-down">
        <Circle fill="#fdfdfd" />
      </span>
      <div className="brand-container fade-in">
        <Logo medium/>
        <Brand hero />
      </div>
    </div>
  )
}