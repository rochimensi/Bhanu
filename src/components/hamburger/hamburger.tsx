import * as React from 'react'
import './hamburger.scss'

export interface Props {
	toggleNavigation: () => void
}

export function Hamburger(props: Props) {
	const [isActive, setIsActive] = React.useState(false)

	const onClick = () => {
		setIsActive(!isActive)
		props.toggleNavigation()
	}

  return (
		<button 
			className={`hamburger hamburger--collapse ${isActive && 'is-active'}`} 
			type="button" 
			onClick={ onClick }
			aria-label="Menu" 
			aria-controls="navigation" 
			aria-expanded={isActive}
		>
			<span className="hamburger-box">
				<span className="hamburger-inner"></span>
			</span>
		</button>
  )
}