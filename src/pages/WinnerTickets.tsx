import React, { SetStateAction, useEffect, useState } from 'react'
import { User } from '@auth0/auth0-react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import LoginButton from '../components/Login'
import WinCard from '../components/WinCard'
import '../sass/WinnerTickets.scss'
import NoBarOrPrize from '../components/NoBarOrPrize'

interface Props {
	user: User
	isAuthenticated: boolean
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
	token: string
}

interface WinCard {
	bar : string
	winNumber : number
	expirationDate : string
	winCode : string
	prize: string
}

const WinnerTickets = ({ user, isAuthenticated, token, menu, setMenu }: Props) =>{
	
	const [data, setData] = useState<WinCard[]>([])

	useEffect(() => {
		if (user && token) getWinnerCards()
	}, [user, token])

	const getWinnerCards = async() =>{
		const response = await fetch(`https://backend-tombola-production.up.railway.app/api/getwinnercards/${user.sub}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		})
		const data = await response.json()
		setData(data)
		console.log(data)
	}

	return(
		<>
			<Header bar='Trivify.es' setMenu={setMenu} isMenu={true} />
			<SideBar menu={menu} setMenu={setMenu} user={user} isAuthenticated={isAuthenticated} />
			<div className='game-container'>
				{!isAuthenticated ? (
					<LoginButton />
				) : (
					<div className='winner-tickets'>
						<h2 className='page-tittle'>Mis Premios</h2>
						{data.length>0 ? data.map((item, index) => {
							console.log('item :>> ', item)
							const expDate = stringToDate(item)
							if (expDate > new Date())
								return <WinCard 
									key={index}	
									bar={item.bar}
									winCode={item.winCode}
									winNumber={item.winNumber}
									date={item.expirationDate}
									prize={item.prize}
								/>
						}) : <NoBarOrPrize onPrizes={true} />}
					</div>
				)}
			</div>
		</>
	)
}

export default WinnerTickets

function stringToDate(item: WinCard) {
	const dateString = item.expirationDate
	const dateParts = dateString.split('/')
	const day = parseInt(dateParts[0], 10)
	const month = parseInt(dateParts[1], 10) - 1
	const year = parseInt(dateParts[2], 10)
	const expDate = new Date(year, month, day)
	return expDate
}
