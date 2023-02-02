import React, { SetStateAction, useState } from 'react'
import Game from '../../components/Game'
import Header from '../../components/Header'
import LogoutButton from '../../components/Logut'
import SideBar from '../../components/SideBar'

interface Props {
	user: object
	isAuthenticated: boolean
	token: string
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
}

const SalaPremier = ({user, isAuthenticated, token, menu, setMenu} : Props) => {
	return (
		<>
			<Header bar='Sala Premier' user={user} setMenu={setMenu} isAuthenticated={isAuthenticated}/>
			<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />
			<Game bar='Sala Premier' user={user} isAuthenticated={isAuthenticated} token={token}/>
			<LogoutButton />
		</>
	)
}

export default SalaPremier