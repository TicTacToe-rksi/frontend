//@ts-nocheck
import styles from './OpponentCard.module.scss'
import userImg from "../../../../../shared/assets/img/user.png";

export const OpponentCard = (props) => {
	return (
		<div className={ styles.opponent }>
			<div className={ styles.oppInfoWrapper }>
				<img src={ userImg } alt="puk" />
				<p> { props.username } </p>
			</div>
		</div>
	)
}
