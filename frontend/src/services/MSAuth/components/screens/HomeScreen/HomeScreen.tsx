//@ts-nocheck

import styles from './HomeScreen.module.scss'
import userImg from '../../../../../shared/assets/img/user.png'

export const HomeScreen = () => {


	return (
		<div className={ styles.HomeScreen }>
			<div className={ styles.load }>
				<h1>TicTacToe</h1>
			</div>

			<div className={ styles.UserCard }>
				<img src={ userImg } alt="puk" />
				<p className={ styles.Username }> Username </p>
				<p className={ styles.id }> ID: 000000 </p>

				<section className={ styles.StatsSection }>
					<p> Win: 1 </p>
					<p> Lose: 1 </p>
				</section>
			</div>
		</div>
	)
}
