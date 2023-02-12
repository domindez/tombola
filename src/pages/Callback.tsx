import { User } from '@auth0/auth0-react'
import React, { SetStateAction, useEffect } from 'react'
import Loading from '../components/Loading'
import SideBar from '../components/SideBar'

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
			const response = await fetch('https://backend-tombola-production.up.railway.app/api/createuser', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ user }),
			})
			const data = await response.json()
			if (data.succes) console.log('Usuario creado en la BD')
			redirect()

		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />
			<Loading bar='Trivify.es' setMenu={setMenu} msg={'Recuperando usuario...'} />
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