//@ts-nocheck

import * as React from 'react'
import { useEffect, useState } from 'react'

import axios from 'axios'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'

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

export const AuthLoginScreen = () => {
	const navigate = useNavigate()
	const [ errorProperty, setErrorProperty ] = useState(false)
	const [ isAuthorized, setIsAuthorized ] = useState(false)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)

		localStorage.setItem('username', data.get('email'))
		localStorage.setItem('password', data.get('password'))

		axios.post(`${ process.env.REACT_APP_BASE_URL }/auth/login`,
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
	}

	useEffect(() => {
		if (localStorage.getItem('username') && localStorage.getItem('password')) {
			navigate('/homepage')
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ isAuthorized ])
	if (localStorage.getItem('username') && localStorage.getItem('password')) {
		window.location.pathname = '/home'
	}

	const mgTopOfPage: number = window.innerHeight / 4.5

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: `${ mgTopOfPage }px`,
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
					Войти
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					{/* inn */}
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Username"
						name="email"
						autoComplete="username"
						type="username"
						error={errorProperty}
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
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 2, mb: 2, py: 2 }}
					>
						Войти
					</Button>
					<Grid container>
						<Grid item>
							<Link href="/authRegister" variant="body2">
								{'Нет аккаунта? Зарегистрироваться'}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 8, mb: 4 }} />
		</Container>
	)
}
