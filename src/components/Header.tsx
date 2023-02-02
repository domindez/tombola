import React, { SetStateAction } from 'react'
import '../sass/Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface Props {
	bar: string
	user: object
	isAuthenticated: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
}


const Header = ({ bar, user, isAuthenticated, setMenu }: Props) => {
	return (
		<>
			<div className='header'>
				<FontAwesomeIcon onClick={() => setMenu(true)} className='menu-btn' icon={faBars}/>
				<h1>
					Tómbola
					<span className='header__small'>de {bar}</span>
				</h1>
			</div>
		</>
	)
}

export default Header
