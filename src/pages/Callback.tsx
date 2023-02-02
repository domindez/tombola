import React, { SetStateAction } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

interface Props {
	user: any
	isAuthenticated: boolean
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
}

const Callback = ({user, isAuthenticated,  menu, setMenu} : Props) => {

	return (
		<>
			<Header bar='trivify.es' user={user} setMenu={setMenu} isAuthenticated={isAuthenticated}/>
			<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />
			<div className='game-container'>
				{user && <h3>Hola {user.name}, te estamos redireccionando al juego.</h3>}
			</div>
		</>
	)
}

export default Callback