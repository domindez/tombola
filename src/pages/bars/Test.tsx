import React, { SetStateAction } from 'react'
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

const Test = ({user, isAuthenticated, token, menu, setMenu} : Props) => {
	return (
		<>
			<Header bar='Test' user={user} setMenu={setMenu} isAuthenticated={isAuthenticated}/>
			<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />
			<Game bar='Test' isAuthenticated={isAuthenticated} token={token} user={user}/>
			<LogoutButton />
		</>
	)
}

export default Test