import React, { useEffect, useState } from 'react'
import BarTickets from '../components/BarTickets'
import Header from '../components/Header'
import LoginButton from '../components/Login'
import MyCuponsHeader from '../components/MyCuponsHeader'

interface Props {
	user: object
	isAuthenticated: boolean
	token: string
}

const Home = ({user, isAuthenticated, token} : Props) => {
	console.log(user)
	const [data, setData] = useState([{ barName: '', nCupons: 0, url: '' }])

	useEffect(() => {
		if (user && token) getAllCupons()
	}, [user,token])

	const getAllCupons = async () => {
		console.log('user', user)
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
	const PLACEHOLDER_NUM = 7

	return (
		<>
			<Header bar='trivify.es' user={user} isAuthenticated={isAuthenticated}/>
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
							url={item.url}
						/>
					))
					: [
						...data.map((item, index) => (
							<BarTickets
								key={index}
								barName={item.barName}
								nCupons={item.nCupons}
								url={item.url}

							/>
						)),
						...Array(PLACEHOLDER_NUM - data.length)
							.fill(0)
							.map((_, index) => (
								<BarTickets
									key={index + data.length}
									barName=''
									nCupons={0}
									url={''}
								/>
							)),
					]}
			</div>
		</>
	)
}

export default Home
