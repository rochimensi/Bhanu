import * as React from 'react'

export interface Props {
  x?: string
  y?: string
  radius?: string
  fill?: string
  width?: string
  height?: string
}

export function Circle(props: Props) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox={`0 0 ${props.width || '100'} ${props.height || '100'}`}  >
      <circle fill={props.fill || "white"} cx={props.x || "50"} cy={props.y || "50"} r={props.radius || "50"}></circle>
    </svg>
  )
}