import * as React from 'react'
import './underline.scss'

export interface Props {
  top?: string
  width?: string
}

export function Underline(props: Props) {
  return (
    <div className="underline" style={{top: props.top}}>
      <div className="underline__line" style={{width: props.width}}></div>
    </div>
  )
}