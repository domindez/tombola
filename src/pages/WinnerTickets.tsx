import React, { SetStateAction, useEffect, useState } from 'react'
import { User } from '@auth0/auth0-react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import LoginButton from '../components/Login'
import WinCard from '../components/WinCard'
import '../sass/WinnerTickets.scss'
import NoBarOrPrize from '../components/NoBarOrPrize'
import Loading from '../components/Loading'
import API_BASE_URL from '../config'

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
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState<WinCard[]>([])

	useEffect(() => {
		if (user && token) getWinnerCards()
	}, [user, token])

	const getWinnerCards = async() =>{
		const response = await fetch(`${API_BASE_URL}/api/getwinnercards/${user.sub}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		})
		const data = await response.json()
		console.log('data :>> ', data)
		setData(data)
		setLoading(false)
	}
	if (loading) return <Loading header={true} bar='Trivify.es' setMenu={setMenu} msg={'Contactando al presidente...'}/>
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
