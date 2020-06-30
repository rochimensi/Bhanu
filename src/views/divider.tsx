import * as React from 'react'

export interface Props {
  fill?: string
}

export function Divider(props: Props) {
  return (
    <span className="svg-container svg-container--divider">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0px" y="0px" viewBox="0 0 1439.5 229.5" enableBackground="new 0 0 1439.5 229.5">
        <polygon fill={props.fill || 'white'} points="1440.5,230 0,229.5 1440,-0.5 "></polygon>
      </svg>
    </span>
  )
}