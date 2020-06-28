import * as React from 'react'
import logo from '../assets/logo.png'

export interface Props {
  small?: boolean
  medium?: boolean
  large?: boolean
}
export function Logo(props: Props) {
  return (
    <img 
      src={logo}
      className="logo"
      alt="logo"
    />
  )
}
