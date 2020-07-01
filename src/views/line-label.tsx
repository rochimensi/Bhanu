import * as React from 'react'
import './line-label.scss'

export interface Props {
  text: string
  top?: string
  width?: string
}

export function LineLabel(props: Props) {
  return (
    <div className="line-label" style={{top: props.top}}>
      <div className="line-label__line" style={{width: props.width}}></div>
      <span className="line-label__label">{props.text}</span>
    </div>
  )
}