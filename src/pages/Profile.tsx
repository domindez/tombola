import { useAuth0, User } from '@auth0/auth0-react'
import React, { SetStateAction, useState } from 'react'
import Header from '../components/Header'
import LoginButton from '../components/Login'
import Popup from '../components/Popup'
import SideBar from '../components/SideBar'
import '../sass/Profile.scss'

interface Props {
	user: User
	isAuthenticated: boolean
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
	token: string
}

const Games = ({user, isAuthenticated, menu, setMenu, token} : Props) => {

	const [showConfirmation, setShowConfirmation] = useState(false)

	const { logout } = useAuth0()


	const deleteAccount = async(id: string | undefined) =>{
		if (id === undefined) return		
		try {
			const response = await fetch(`http://localhost:4000/api/deleteuser/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			const data = await response.json()
			if (data.succes) logout()

		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<Header bar='Trivify.es' setMenu={setMenu} isMenu={true} />
			<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />
			<div className='game-container'>
				{!isAuthenticated ? (
					<LoginButton />
				) : (
					<div className='profile'>
						{showConfirmation && <Popup tittle='Atencíon'
							text='Estas a punto de borrar tu cuenta y todos tus datos. ¿Quieres continuar?'
							btnYes='Aceptar'
							btnNo='Cancelar'
							onAccept={()=> deleteAccount(user.sub)}
							onCancel={()=> setShowConfirmation(false)}
						/>}
						<h2 className='page-tittle'>Mi Perfil</h2>
						<div className='profile-info'>
							<img src={user.picture} alt={user.name} referrerPolicy='no-referrer'/>
							<h2>{user.name}</h2>
							<p>{user.email}</p>
						</div>
						<button onClick={()=> setShowConfirmation(true)} className='btn'>Borrar cuenta</button>
					</div>
				)}
			</div>
		</>
	)
}

export default Games
