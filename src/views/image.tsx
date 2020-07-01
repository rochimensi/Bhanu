import * as React from 'react'
import ParallaxContainer from '../components/parallax-container'
import { Parallax } from 'react-scroll-parallax'

export interface Props {
  parallax?: boolean
  src: string
  alt: string
  className?: string
}

export function Image(props: Props) {
  if(props.parallax) {
    return (
      <ParallaxContainer scrollAxis="vertical" >
        <Parallax y={['0%', '50%']} >
          <img src={props.src} alt={props.alt} className={props.className} />
        </Parallax>
      </ParallaxContainer>
    )
  }

  return (
    <img src={props.src} alt={props.alt} className={props.className} />
  )
}