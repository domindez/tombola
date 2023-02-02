import React, { SetStateAction } from 'react'
import Game from '../../components/Game'
import Header from '../../components/Header'
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
		</>
	)
}

export default SalaPremier