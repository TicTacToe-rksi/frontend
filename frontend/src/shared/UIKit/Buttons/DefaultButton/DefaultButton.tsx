// UIKit Default button component

import React from 'react'
import styles from './DefaultButton.module.scss'

type UIKitDefaultButtonProps = {
	width?: number,
	height?: number,

	padding?: number,

	TextColor?: string,
	BackgroundColor?: string,
	border?: string,
	borderRadius?: number,

	hover?: object,

	children?: any,
}

export const UIKitDefaultButton = (
	props: UIKitDefaultButtonProps,
) => {
	return (
		<button className={ styles.UIKitDefaultButton }  style={{
			width: `${ props.width } rem !important`,
			height: `${ props.height } rem !important`,

			padding: `${ props.padding } rem !important`,

			color: `${ props.TextColor } !important`,
			background:`${ props.BackgroundColor } !important`,
			border: `${ props.border } !important`,
			borderRadius: `${ props.borderRadius } !important`,
		}}>
			{ props.children }
		</button>
	)
}
