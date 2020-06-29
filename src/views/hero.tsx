import * as React from 'react'
import './hero.scss'
import { Brand } from './brand'
import { Circle } from './circle'
import { Logo } from './logo'
import { Parallax } from 'react-scroll-parallax'
import ParallaxContainer from '../components/parallax-container'

export function Hero() {
  return (
    <div className="hero">
      <span className="svg-container svg-container--top slide-down">
        <Circle fill="#ede1da" />
      </span>
      <span className="svg-container svg-container--bottom slide-up">
        <Circle fill="#fdfdfd" opacity="0.5" />
      </span>
      
      <ParallaxContainer scrollAxis="vertical" >
        <Parallax y={['-50%', '50%']} >
          <div className="brand-container fade-in">
            <Logo medium/>
            <Brand hero />
          </div>
        </Parallax>
      </ParallaxContainer>
    </div>
  )
}