import * as React from 'react'
import './section.scss'

export interface Props {
  children: any
  className?: string
}

export function Section(props: Props) {
  return (
    <section className={props.className}>
      <div className="section__content">
        {props.children}
      </div>
    </section>
  )
}