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
        <Circle fill="#fdfdfd" radius="35" y="40" opacity="0.5" />
      </span>
      <span className="svg-container svg-container--top slide-left">
        <Circle fill="#e6ddd8" x="100" y="70" width="100" height="110" radius="20" opacity="0.8" />
      </span>
      {/* <span className="svg-container svg-container--top slide-right">
        <Circle fill="#f2efed" x="0" y="70" width="100" height="140" radius="35" opacity="0.8" />
      </span> */}
      <div className="brand__parallax__container">
        <ParallaxContainer scrollAxis="vertical" >
          <Parallax y={['-30%', '30%']} >
            <div className="brand-container fade-in">
              <Logo medium/>
              <Brand hero />
            </div>
          </Parallax>
        </ParallaxContainer>
      </div>
    </div>
  )
}