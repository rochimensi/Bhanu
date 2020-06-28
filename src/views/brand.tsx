import * as React from 'react'
import './brand.scss'

export interface Props {
  modal?: boolean
  header?: boolean
  hero?: boolean
}

export function Brand(props: Props) {
  let className = ""
  if (props.modal) {
    className = "brand--modal"
  }
  if (props.header) {
    className = "brand--header"
  }
  if (props.hero) {
    className = "brand--hero"
  }

  return (
    <div className={`brand ${className}`}>
      <h1 className="brand__title">Bhanu</h1>
      <span className="brand__subtitle">Tienda de Bienestar</span>
    </div>
  )
}