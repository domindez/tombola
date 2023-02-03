import React, { SetStateAction, useEffect, useState } from 'react'
import BarTickets from '../components/BarTickets'
import Header from '../components/Header'
import LoginButton from '../components/Login'
import MyCuponsHeader from '../components/MyCuponsHeader'
import SideBar from '../components/SideBar'
import UserHasNoBar from '../components/UserHasNoBar'

interface Props {
	user: object
	isAuthenticated: boolean
	token: string
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
}

const Games = ({ user, isAuthenticated, token, menu, setMenu }: Props) => {
	const [data, setData] = useState([{ barName: '', nCupons: 0, url: '' }])

	useEffect(() => {
		if (user && token) getAllCupons()
	}, [user, token])

	const getAllCupons = async () => {
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

	const PLACEHOLDER_NUM = 7

	return (
		<>
			<Header bar='trivify.es' setMenu={setMenu} isMenu={true} />
			<SideBar
				menu={menu}
				setMenu={setMenu}
				user={user}
				isAuthenticated={isAuthenticated}
			/>
			<div className='game-container'>
				{!isAuthenticated ? (
					<LoginButton />
				) : (
					<h2 className='page-tittle'>Mis boletos:</h2>
				)}
				<MyCuponsHeader />
				{/* Si hay más bares que el placeholder_num*/}
				{data.length >= PLACEHOLDER_NUM
					? data.map((item, index) => (
						<BarTickets
							key={index}
							barName={item.barName}
							nCupons={item.nCupons}
							url={item.url}
						/>
					))
					/* Si hay 0 bares */
					: data.length === 0
						? [
							<UserHasNoBar key={-1} />,
							...Array(PLACEHOLDER_NUM - 1)
								.fill(0)
								.map((_, index) => (
									<BarTickets
										key={index + data.length}
										barName=''
										nCupons={0}
										url={''}
									/>
								)),
						]
						/* Si hay menos bares que el placeholder_num */
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

export default Games
