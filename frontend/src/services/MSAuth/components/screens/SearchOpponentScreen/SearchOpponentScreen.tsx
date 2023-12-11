// @ts-nocheck
import styles from './SearchOpponentScreen.module.scss'
import { useForm } from "react-hook-form";
import userImg from '../../../../../shared/assets/img/user.png'
import {Link} from "react-router-dom";
import {OpponentCard} from "../../UI/OpponentCard/OpponentCard";
import {MSAuthAPI} from "../../../API/MSAuthAPI";
import {useEffect, useState} from "react";

export const SearchOpponentScreen = () => {
	const [ searchedUser, setSearchedUser ] = useState('')
	const [ displayUser, setDisplayUser ] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			// exampleRequired: ""
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
						// alert(JSON.stringify(data));
						console.log(data)
						MSAuthAPI.getUser(JSON.stringify(data))
							.then(a => setSearchedUser(a))

						if (searchedUser === '') {
							setDisplayUser(!displayUser)
						} else {
							setDisplayUser(true)
						}
					})}
				>
					<input
						className={ styles.input }
						placeholder="Enter the username"
						{...register("username", { required: true, maxLength: 10 })}
					/>
					<button className={ styles.submit } type="submit"> Найти </button>
					{errors.exampleRequired && <p> This field is required </p>}
				</form>

				<div className={ displayUser ? '' : styles.hidden }>
					<OpponentCard username={ searchedUser } />
				</div>
			</div>
		</div>
	);
}
