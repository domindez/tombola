import React from 'react'
import Game from '../components/Game'
import Header from '../components/Header'
import LogoutButton from '../components/Logut'

const SalaPremier = () => {


	return (
		<>
			<Header bar='Sala Premier' />
			<Game bar='Sala Premier' />
			<LogoutButton />
		</>
	)
}

export default SalaPremier