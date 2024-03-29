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

const LoginPage = ({setMenu, menu, user, isAuthenticated} : Props) => {

	useEffect(() => {	
		if(user.sub)	{
			console.log(user)
			window.location.replace('/tombola/games')
		}
	},[user])
	return (
		<>
			<Header bar='Trivify.es' setMenu={setMenu} isMenu={true}/>
			<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />			
			<div className='login-bg'>
				<div className='login-container'>
					<h3>Inicia sesión</h3>
					<LoginButton />
				</div>
			</div>
		</>
	)
}

export default LoginPage