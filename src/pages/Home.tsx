import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import BarTickets from '../components/BarTickets'
import Header from '../components/Header'
import LoginButton from '../components/Login'
import LogoutButton from '../components/Logut'
import MyCuponsHeader from '../components/MyCuponsHeader'

const Home = () => {
	const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

	const [data, setData] = useState([{ barName: '', nCupons: 0 }])

	useEffect(() => {
		if (user) getAllCupons()
	}, [user])

	const getAllCupons = async () => {
		const token = await getAccessTokenSilently()
		const response = await fetch('http://localhost:4000/api/getallcodes', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user }),
		})
		const cuponsData = await response.json()
		setData(cuponsData)
	}

	console.log('data :>> ', data)
	const PLACEHOLDER_NUM = 5

	return (
		<>
			<LogoutButton />
			<Header bar='trivify.es' />
			<div className='game-container'>
				{!isAuthenticated ? (
					<LoginButton />
				) : (
					<h2 className='page-tittle'>Mis boletos:</h2>
				)}
				<MyCuponsHeader />
				{data.length >= PLACEHOLDER_NUM
					? data.map((item, index) => (
						<BarTickets
							key={index}
							barName={item.barName}
							nCupons={item.nCupons}
						/>
					))
					: [
						...data.map((item, index) => (
							<BarTickets
								key={index}
								barName={item.barName}
								nCupons={item.nCupons}
							/>
						)),
						...Array(PLACEHOLDER_NUM - data.length)
							.fill(0)
							.map((_, index) => (
								<BarTickets
									key={index + data.length}
									barName=''
									nCupons={0}
								/>
							)),
					]}
			</div>
		</>
	)
}

export default Home
