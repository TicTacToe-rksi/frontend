//@ts-nocheck

import styles from './PvpScreen.module.scss'
import { Link } from "react-router-dom";
import vsImg from "../../../../../shared/assets/img/vs.png";
import robotImg from "../../../../../shared/assets/img/robot.png";

export const PvpScreen = () => {
	return (
		<div className={ styles.PvpScreen }>
			<div className={ styles.wrapper }>
				<Link to="/searchOpponent">
					<img src={ vsImg } alt="puk" />
					<p> PVP </p>
				</Link>

				<Link to="/botGame">
					<img src={ robotImg } alt="puk" />
					<p> Bot </p>
				</Link>
			</div>
		</div>
	)
}
