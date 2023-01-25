import React from 'react'
import Header from '../components/Header'
import { useAuth0 } from '@auth0/auth0-react'


const Callback = () => {
	const { user } = useAuth0()

	return (
		<>
			<Header bar='tu bar' />
			<div className='game-container'>
				{user && <h3>Hola {user.name}, te estamos redireccionando al juego.</h3>}
			</div>
		</>
	)
}

export default Callback