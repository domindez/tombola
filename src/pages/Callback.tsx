import { User } from '@auth0/auth0-react'
import React, { SetStateAction, useEffect } from 'react'
import Loading from '../components/Loading'
import SideBar from '../components/SideBar'
import API_BASE_URL from '../config'

interface Props {
	user: User
	isAuthenticated: boolean
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
	token: string
}

const Callback = ({user, isAuthenticated,  menu, setMenu, token} : Props) => {
	useEffect(() => {
		if (user && token) userToBD()
	}, [user,token])

	const userToBD = async () => {
		try {			
			const response = await fetch(`${API_BASE_URL}/api/createuser`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ user }),
			})
			const data = await response.json()
			if (data.succes) console.log('Usuario creado')
			redirect()

		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />
			<Loading header={true} bar='Trivify.es' setMenu={setMenu} msg={'Recuperando usuario...'} />
		</>
	)

	function redirect() {
		const lastBar = localStorage.getItem('trivify-lastroute')
		if (lastBar) {
			window.location.replace(lastBar)
		} else if (!lastBar) { window.location.replace('/tombola/games')} 
	}
}

export default Callback