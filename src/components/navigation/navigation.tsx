import * as React from 'react'
import { Hamburger } from '../hamburger/hamburger'
import { NavigationModal } from './navigation-modal'

export interface Props {

}

export function Navigation(props: Props) {
	const [isOpen, setIsOpen] = React.useState(false)

	const toggleNavigation = () => {
		setIsOpen(!isOpen)
	}

	return (
			<>
				<Hamburger toggleNavigation={toggleNavigation} />
				<NavigationModal isOpen={isOpen} />
			</>
	)
}