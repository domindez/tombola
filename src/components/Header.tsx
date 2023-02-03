import React, { SetStateAction } from 'react'
import '../sass/Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface Props {
	bar: string
	setMenu: React.Dispatch<SetStateAction<boolean>>
	isMenu: boolean
}

const Header = ({ bar, setMenu, isMenu }: Props) => {
	return (
		<>
			<div className='header'>
				{isMenu ? (
					<FontAwesomeIcon
						onClick={() => setMenu(true)}
						className='menu-btn'
						icon={faBars}
					/>
				) : (
					<FontAwesomeIcon
						className='menu-btn no-menu'
						icon={faBars}
					/>
				)}
				<h1>
					Tómbola
					<span className='header__small'>de {bar}</span>
				</h1>
			</div>
		</>
	)
}

export default Header
