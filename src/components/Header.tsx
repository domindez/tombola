import React from 'react'
import '../sass/Header.scss'
import UserBar from './UserBar'

interface Props {
	bar: string
}

const Header = ({ bar }: Props) => {
	return (
		<>
			<div className='header'>
				<h1>
					Tómbola
					<span className='header__small'>en {bar}</span>
				</h1>
				<UserBar />
			</div>
		</>
	)
}

export default Header
