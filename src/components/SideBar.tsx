import React, { SetStateAction, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import '../sass/SideBar.scss'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
	user: any
	isAuthenticated: boolean
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
}


const SideBar = ({ isAuthenticated, user, menu, setMenu }: Props) => {
	const { loginWithRedirect, logout } = useAuth0()

	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) setMenu(false)
		}
		document.addEventListener('mousedown', handleClickOutside)

		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [menuRef])


	if (isAuthenticated && user) {
		return (
			<div id='side-bar' ref={menuRef} className={menu ? 'side-bar active' : 'side-bar'}>
				<FontAwesomeIcon onClick={() => setMenu(false)} className='close-menu' icon={faArrowLeftLong}/>
				<a href='/tombola/games'>
					<img
						src={user.picture || require('../img/img-placeholder.jpg')}
						alt={user.name}
						referrerPolicy='no-referrer'
					/>
				</a>
				<ul>
					<li><a href="/tombola/profile">Mi perfil</a></li>
					<li><a href="/tombola/games">Mis juegos</a></li>
					<li><a href="/tombola/winner-tickets">Mis boletos premiados</a></li>
					<li><a onClick={() => logout()} href="#">Cerrar sesión</a></li>
					<li className='more-trivify'><a href="https://trivify.es/">Más juegos de Trivify</a></li>
				</ul>
			</div>
		)
	}
	else{
		return (
			<div id='side-bar' className={menu ? 'side-bar active' : 'side-bar'}>
				<FontAwesomeIcon onClick={() => setMenu(false)} className='close-menu' icon={faArrowLeftLong}/>
				<img className='no-click'
					src={require('../img/img-placeholder.jpg')}
					alt={'no user image'}
					referrerPolicy='no-referrer'
				/>
				<ul>
					<li><a className='no-click' href="#">Mi perfil</a></li>
					<li><a className='no-click' href="#">Mis juegos</a></li>
					<li><a className='no-click' href="#">Mis boletos premiados</a></li>
					<li><a onClick={() => loginWithRedirect()} href="#">Iniciar Sesión</a></li>
					<li className='more-trivify'><a href="https://trivify.es/">Más juegos de Trivify</a></li>
				</ul>
			</div>
		)
	}
}
	


export default SideBar
