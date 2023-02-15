import { User } from '@auth0/auth0-react'
import React, { SetStateAction, useEffect } from 'react'
import Header from '../components/Header'
import LoginButton from '../components/Login'
import SideBar from '../components/SideBar'

interface Props {
	user: User
	isAuthenticated: boolean
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
}

const Page404 = ({setMenu, menu, user, isAuthenticated} : Props) => {


	return (
		<>
			<Header bar='Trivify.es' setMenu={setMenu} isMenu={true}/>
			<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />			
			<div className='game-container'>
				<img className='image-404' src={require('../img/404image.png')} alt='404image' />
				<p>Aquí no hay nada...</p>
				<a href='/tombola/games'>Volver</a>
			</div>
		</>
	)
}

export default Page404