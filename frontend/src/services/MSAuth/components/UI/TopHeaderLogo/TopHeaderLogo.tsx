//@ts-nocheck

import styles from './TopHeaderLogo.module.scss'

import unionImg from '../../../../../shared/assets/img/union.svg'

export const TopHeaderLogo = () => {
	return (
		<div className={ styles.TopHeaderLogo }>
			<img src={ unionImg } alt="puk" />
			<h1> TicTacToe </h1>
		</div>
	)
}
