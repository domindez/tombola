import React, { SetStateAction } from 'react'
import Game from '../components/Game'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

interface Props {
	user: object
	isAuthenticated: boolean
	token: string
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
	bar: string
}

const BarPage = ({bar, user, isAuthenticated, token, menu, setMenu} : Props) => {
	return (
		<div className={`page-${bar.replace(/\s/g, '').toLowerCase()}`}>
			<Header bar={bar} setMenu={setMenu} isMenu={true} />
			<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />
			<Game bar={bar} user={user} isAuthenticated={isAuthenticated} token={token} setMenu={setMenu}/>
		</div>
	)
}

export default BarPage