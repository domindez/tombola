import React, { SetStateAction, useEffect } from 'react'
import Header from '../components/Header'
import LoginButton from '../components/Login'
import SideBar from '../components/SideBar'

interface Props {
	user: any
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
			<div className='login-bg'>
				<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />			
				<LoginButton />
			</div>
		</>
	)
}

export default LoginPage