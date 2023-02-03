import React, { SetStateAction, useEffect } from 'react'
import Loading from '../components/Loading'
import SideBar from '../components/SideBar'

interface Props {
	user: any
	isAuthenticated: boolean
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
	token: string
}

const Callback = ({user, isAuthenticated,  menu, setMenu, token} : Props) => {
	useEffect(() => {
		if (user && token) userToBD()
	}, [user,token])


	// CAMBIAR ESTO POR algo que compruebe si la cuenta existe y si no existe crearla
	const userToBD = async () => {
		try {			
			const response = await fetch('http://localhost:4000/api/createuser', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ user }),
			})
			const data = await response.json()
			if (data.succes) console.log('Usuario creado en la BD')

		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />
			<Loading bar='trivify.es' setMenu={setMenu} msg={'Recuperando usuario...'} />
		</>
	)
}

export default Callback