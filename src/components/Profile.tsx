import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const Profile = () => {

	const { user, isAuthenticated, isLoading } = useAuth0()

	console.log('isAuthenticated', isAuthenticated)

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		isAuthenticated && user ? (
			<div>
				<img src={user.picture} alt={user.name} referrerPolicy='no-referrer'/>
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		): <div>No está logeado</div>
	)
}

export default Profile