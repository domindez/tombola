import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Header from '../components/Header'
import LoginButton from '../components/Login'
import LogoutButton from '../components/Logut'
import Profile from '../components/Profile'

const Home = () => {

	const {isAuthenticated} = useAuth0()

	console.log('isAuthenticated :>> ', isAuthenticated)
	return (
		<>
			<Header bar='tu bar' />
			<div className='game-container'>
				{isAuthenticated ? <LogoutButton /> : <LoginButton />}
				<Profile />
			</div>
		</>
	)
}

export default Home