import React from 'react'
import '../sass/Header.scss'
import UserBar from './UserBar'


interface Props {
	bar: string
	user: object
	isAuthenticated: boolean
}


const Header = ({ bar, user, isAuthenticated }: Props) => {
	return (
		<>
			<div className='header'>
				<h1>
					Tómbola
					<span className='header__small'>de {bar}</span>
				</h1>
				<UserBar user={user} isAuthenticated={isAuthenticated} />
			</div>
		</>
	)
}

export default Header
