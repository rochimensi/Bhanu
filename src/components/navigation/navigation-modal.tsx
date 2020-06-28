import * as React from 'react'
import './navigation-modal.scss'
import { Brand } from '../../views/brand'
import { NavigationMenu } from './navigation-menu'
import imageSrc from '../../assets/navigation.jpg'

export interface Props {
	isOpen: boolean
}

export function NavigationModal(props: Props) {
	const [paddingLeft, setPaddingLeft] = React.useState(0)

	const handleImageWidth = (image: HTMLImageElement) => {
		if (image) {
			setPaddingLeft(image.offsetWidth)
		}
	}

	return (
		<div className="navigation-modal">
			<div className={`navigation-modal__image ${props.isOpen ? 'navigation-modal__image--is-open' : ''}`}>
				<img src={imageSrc} alt="cream on hands" ref={(image: HTMLImageElement) => handleImageWidth(image)} />
			</div>
			<div 
				className={`navigation-modal__navigator ${props.isOpen ? 'navigation-modal__navigator--is-open' : ''}`}
			>
				<div 
					className={`navigation-modal__content ${props.isOpen ? 'navigation-modal__content--is-open' : ''}`}
					style={{left: paddingLeft && paddingLeft + 140 + 'px'}}
				>
					<Brand /> 
					<NavigationMenu />
				</div>
			</div>
		</div>
	)
}