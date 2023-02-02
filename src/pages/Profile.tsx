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

	const deleteAccount = async() =>{
		try {
			const response = await fetch('https://trivify.uk.auth0.com/api/v2/users/lxHR4UU1972YhdvA2MviRAmroSB18rlS', {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})

			if (response.status === 204) {
				// La cuenta del usuario ha sido eliminada correctamente
				console.log('Cuenta eliminada')
			} else {
				throw new Error(await response.text())
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<Header bar='trivify.es' user={user} setMenu={setMenu} isAuthenticated={isAuthenticated}/>
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
						<button onClick={deleteAccount} className='btn'>Borrar cuenta</button>
					</div>
				)}
			</div>
		</>
	)
}

export default Games
