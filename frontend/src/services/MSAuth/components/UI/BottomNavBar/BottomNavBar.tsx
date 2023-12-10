//@ts-nocheck
import styles from './BottomNavBar.module.scss'
import { Link } from "react-router-dom"

import swordsImg from '../../../../../shared/assets/img/swords.png'
import homeImg from '../../../../../shared/assets/img/home.png'
import challengesImg from '../../../../../shared/assets/img/challenges.png'

export const BottomNavBar = () => {
	return (
		<div className={ styles.BottomNavBar }>
			<div className={ styles.Wrapper }>
				<Link to="/home">
					<img src={ homeImg } alt="puk" />
				</Link>

				<Link to="/pvp">
					<img src={ swordsImg } alt="puk" />
				</Link>

				<Link to="/challenges">
					<img src={ challengesImg } alt="puk" />
				</Link>
			</div>
		</div>
	)
}
