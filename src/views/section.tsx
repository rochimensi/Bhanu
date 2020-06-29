import * as React from 'react'
import './section.scss'

export interface Props {
  children: any
}

export function Section(props: Props) {
  return (
    <section>
      <div className="section__content">
        {props.children}
      </div>
    </section>
  )
}