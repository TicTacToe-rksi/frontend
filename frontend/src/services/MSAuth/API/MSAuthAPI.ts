import axios from 'axios'

export class MSAuthAPI {
	public static getUser = async (username: string) => {
		const user = axios
			.post(
				`${ process.env.REACT_APP_BASE_URL }/user/get_empty`,
				username
			)
			.then(response => {
				console.log("puk")
				// console.log(response.data.username)
				return response.data.username
			})
			.catch(e => console.log(e.message))
		return user
	}
}
