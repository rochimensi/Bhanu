import * as React from 'react'
import { Logo } from '../views/logo'
import { Brand } from '../views/brand'
import './header.scss'

export function Header() {
  const [currentScrollHeight, setCurrentScrollHeight] = React.useState<any>(1)

  React.useEffect(() => {
    window.onscroll =()=>{
      const newScrollHeight = Math.ceil(window.scrollY / 1) * 1;
      if (currentScrollHeight != newScrollHeight){
        setCurrentScrollHeight(newScrollHeight)
      }
    }
  })

  return (
    <div 
      className="header"
      style={{opacity: Math.min(100 / currentScrollHeight  , 1)}}
    >
      <Logo />
      <Brand header />
    </div>
  )
}