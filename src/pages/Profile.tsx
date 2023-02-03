import { useAuth0 } from '@auth0/auth0-react'
import React, { SetStateAction } from 'react'
import Header from '../components/Header'
import LoginButton from '../components/Login'
import SideBar from '../components/SideBar'
import '../sass/Profile.scss'

interface Props {
	user: any
	isAuthenticated: boolean
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
	token: string
}

const Games = ({user, isAuthenticated, menu, setMenu, token} : Props) => {
	const { logout } = useAuth0()

	const deleteAccount = async(id: string) =>{
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
			<Header bar='trivify.es' setMenu={setMenu} isMenu={true} />
			<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />
			<div className='game-container'>
				{!isAuthenticated ? (
					<LoginButton />
				) : (
					<div className='profile'>
						<h2 className='page-tittle'>Mi Perfil</h2>
						<div className='profile-info'>
							<img src={user.picture} alt={user.name} referrerPolicy='no-referrer'/>
							<h2>{user.name}</h2>
							<p>{user.email}</p>
						</div>
						<button onClick={()=> deleteAccount(user.sub)} className='btn'>Borrar cuenta</button>
					</div>
				)}
			</div>
		</>
	)
}

export default Games
