import React from 'react'
import Game from '../components/Game'
import Header from '../components/Header'
import LogoutButton from '../components/Logut'

interface Props {
	user: object
	isAuthenticated: boolean
	token: string
}

const Test = ({user, isAuthenticated, token} : Props) => {
	return (
		<>
			<Header bar='Test' user={user} isAuthenticated={isAuthenticated}/>
			<Game bar='Test' isAuthenticated={isAuthenticated} token={token} user={user}/>
			<LogoutButton />
		</>
	)
}

export default Test