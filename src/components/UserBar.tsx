import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../sass/UserBar.scss'

const UserBar = () => {

	const { user, isAuthenticated } = useAuth0()

	if (isAuthenticated && user) {
		return (
			<div className='user-bar'>
				<img src={user.picture || require('../img/img-placeholder.jpg')} alt={user.name} referrerPolicy='no-referrer' />
			</div>
		)
	} else {
		return (<div className='user-bar'>
			<img src={require('../img/img-placeholder.jpg')} alt={'no user image'} referrerPolicy='no-referrer' />
		</div>)
	}

}

export default UserBar