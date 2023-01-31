import React from 'react'
import '../sass/UserBar.scss'

interface Props {
  user: any
  isAuthenticated: boolean;
}

const UserBar = ({user, isAuthenticated} : Props) => {


	if (isAuthenticated && user) {
		return (
			<div className='user-bar'>
				<a href='/tombola'>
					<img
						src={user.picture || require('../img/img-placeholder.jpg')}
						alt={user.name}
						referrerPolicy='no-referrer'
					/>
				</a>
			</div>
		)
	} else {
		return (
			<div className='user-bar'>
				<img
					src={require('../img/img-placeholder.jpg')}
					alt={'no user image'}
					referrerPolicy='no-referrer'
				/>
			</div>
		)
	}
}

export default UserBar
