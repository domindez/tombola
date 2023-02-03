import React, { SetStateAction } from 'react'
import Header from '../components/Header'
import LoginButton from '../components/Login'
import SideBar from '../components/SideBar'

interface Props {
	user: object
	isAuthenticated: boolean
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
}

const LoginPage = ({setMenu, menu, user, isAuthenticated} : Props) => {
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