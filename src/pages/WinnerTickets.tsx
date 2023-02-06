import React, { SetStateAction } from 'react'
import { useAuth0, User } from '@auth0/auth0-react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import LoginButton from '../components/Login'
import WinCard from '../components/WinCard'
import '../sass/WinnerTickets.scss'

interface Props {
	user: User
	isAuthenticated: boolean
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
	token: string
}

const WinnerTickets = ({ user, isAuthenticated, token, menu, setMenu }: Props) =>{
	return(
		<>
			<Header bar='Trivify.es' setMenu={setMenu} isMenu={true} />
			<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />
			<div className='game-container'>
				{!isAuthenticated ? (
					<LoginButton />
				) : (
					<div className='winner-tickets'>
						<h2 className='page-tittle'>Mi Perfil</h2>
						<WinCard 
							bar={'Mi bar'}
							winNumber={14}
							date={'12/2/2023'}
							winCode={'Ae23HX'}
						/>
					</div>
				)}
			</div>
		</>
	)
}

export default WinnerTickets