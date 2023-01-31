import React from 'react'
import Header from '../components/Header'

interface Props {
	user: any
	isAuthenticated: boolean
}

const Callback = ({user, isAuthenticated} : Props) => {

	return (
		<>
			<Header bar='trivify.es' user={user} isAuthenticated={isAuthenticated}/>
			<div className='game-container'>
				{user && <h3>Hola {user.name}, te estamos redireccionando al juego.</h3>}
			</div>
		</>
	)
}

export default Callback