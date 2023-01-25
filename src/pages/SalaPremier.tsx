import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Game from '../components/Game'
import Header from '../components/Header'
import LoginButton from '../components/Login'
import LogoutButton from '../components/Logut'
import Profile from '../components/Profile'
import UserBar from '../components/UserBar'

const SalaPremier = () => {

	const { user, isAuthenticated } = useAuth0()

	return (
		<>
			<UserBar />
			<LogoutButton />
			<Header bar='Sala Premier' />
			<div className='container'>
				{!isAuthenticated && <LoginButton />}
			</div>

			<Game bar='Sala Premier' />
		</>
	)
}

export default SalaPremier