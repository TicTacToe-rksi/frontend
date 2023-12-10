// @ts-nocheck
import styles from './SearchOpponentScreen.module.scss'
import { useForm } from "react-hook-form";
import userImg from '../../../../../shared/assets/img/user.png'
import {Link} from "react-router-dom";
import {OpponentCard} from "../../UI/OpponentCard/OpponentCard";

export const SearchOpponentScreen = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			exampleRequired: ""
		}
	});

	return (
		<div className={ styles.SearchOpponent }>
			<div className={ styles.backLinkWrapper }>
				<Link to="/pvp" className={ styles.backLink }>
					<p> Назад </p>
				</Link>
			</div>

			<div className={ styles.wrapper }>
				<form
					onSubmit={handleSubmit((data) => {
						alert(JSON.stringify(data));
					})}
				>
					<input
						className={ styles.input }
						placeholder="Enter the username"
						{...register("exampleRequired", { required: true, maxLength: 10 })}
					/>
					{/*<input className={ styles.submit } type="submit" />*/}
					<button className={ styles.submit } type="submit"> Найти </button>
					{errors.exampleRequired && <p> This field is required </p>}
				</form>

				<OpponentCard />
			</div>
		</div>
	);
}
