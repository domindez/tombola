import React from 'react'
import Game from '../components/Game'
import Header from '../components/Header'
import LogoutButton from '../components/Logut'

interface Props {
	user: object
	isAuthenticated: boolean
	token: string
}

const SalaPremier = ({user, isAuthenticated, token} : Props) => {
	return (
		<>
			<Header bar='Sala Premier' user={user} isAuthenticated={isAuthenticated}/>
			<Game bar='Sala Premier' user={user} isAuthenticated={isAuthenticated} token={token}/>
			<LogoutButton />
		</>
	)
}

export default SalaPremier