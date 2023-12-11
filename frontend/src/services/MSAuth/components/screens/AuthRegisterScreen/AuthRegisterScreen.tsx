//@ts-nocheck

import * as React from "react";
import styles from './AuthRegisterScreen.module.scss'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";


function Copyright(props: any) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Крестики-нолики
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export const AuthRegisterScreen = () => {
	const navigate = useNavigate()
	const [errorProperty, setErrorProperty] = useState(false);
	const [isAuthorized, setIsAuthorized] = useState(false)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		localStorage.setItem('username', data.get('username'))
		localStorage.setItem('password', data.get('password'))

		axios.post(`${ process.env.REACT_APP_BASE_URL }/auth/register`,
			{
				username: localStorage.getItem('username'),
				password: localStorage.getItem('password')
			})
			.then(response => {
				console.log(response.data.authorized)
				if (response.data.authorized) {
					setIsAuthorized(true)
					localStorage.setItem('isAuthed', true)
					window.location.pathname = '/pvp'
				} else {
					localStorage.clear()
				}
			})
			.catch(error => {
				console.log(error.message)
				setErrorProperty(true)
				localStorage.clear()
			})
	};

	useEffect(() => {
		if (localStorage.getItem('username') && localStorage.getItem('password')) {
			navigate('/homepage')
		}
	}, [isAuthorized]);
	// if (localStorage.getItem('inn') && localStorage.getItem('password')) {
	// 	window.location.pathname = '/homepage'
	// }

	const mgTopOfPage: number = window.innerHeight / 5

	return (
		<div className={ styles.AuthRegisterScreen }>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: `${mgTopOfPage}px`,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<h1 style={{
						fontSize: 35,
						textAlign: "center",
					}}>
						Крестики-нолики
					</h1>
					<Typography component="h1" variant="h5">
						Зарегистрироваться
					</Typography>
					<Box component="form" onSubmit={ handleSubmit } noValidate sx={{ mt: 1 }}>
						{/* username */}
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="Имя пользователя"
							name="username"
							type="username"
							error={errorProperty}
							inputProps={{
								maxLength: 20,
							}}
							autoFocus
						/>
						{/* password */}
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Пароль"
							type="password"
							id="password"
							error={errorProperty}
							inputProps={{
								maxLength: 15,
							}}
							autoComplete="current-password"
						/>
						{/*<FormControlLabel*/}
						{/*	control={<Checkbox value="remember" color="primary" />}*/}
						{/*	label="Remember me"*/}
						{/*/>*/}
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 2, mb: 2, py: 2 }}
						>
							Зарегистрироваться
						</Button>
						<Grid container>
							<Grid item>
								<Link href='/authLogin' variant="body2">
									{"Есть аккаунт? Войти"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</div>
	)
}
