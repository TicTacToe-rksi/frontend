import styles from './ChallengesScreen.module.scss'
import { OpponentCard } from "../../UI/OpponentCard/OpponentCard";

export const ChallengesScreen = () => {
	return (
		<div className={ styles.ChallangesScreen }>
			<div className={ styles.wrapper }>
				<h2> Challenges </h2>
				<OpponentCard />
			</div>
		</div>
	)
}
