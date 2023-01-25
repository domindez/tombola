import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import '../sass/UserBar.scss'

const UserBar = () => {

	const { user, isAuthenticated } = useAuth0()

	if (isAuthenticated && user) {
		return (
			<div className='user-bar'>
				<img src={user.picture} alt={user.name} referrerPolicy='no-referrer' />
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		)
	} else {
		return <></>
	}

}

export default UserBar