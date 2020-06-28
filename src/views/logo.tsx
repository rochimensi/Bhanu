import * as React from 'react'
import logo from '../assets/logo.png'
import './logo.scss'

export interface Props {
  small?: boolean
  medium?: boolean
  large?: boolean
}
export function Logo(props: Props) {
  let className = ""
  if(props.small) {
    className = "logo--small"
  }
  if(props.medium) {
    className = "logo--medium"
  }
  if(props.large) {
    className = "logo--large"
  }
  return (
    <img 
      src={logo}
      className={'logo ' + className}
      alt="logo"
    />
  )
}
