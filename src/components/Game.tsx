import React, { SetStateAction, useEffect, useState } from 'react'
import API_BASE_URL from '../config'
import '../sass/Game.scss'
import CodeForm from './CodeForm'
import GameInfoBar from './GameInfoBar'
import InfoPopup from './InfoPopup'
import Loading from './Loading'
import LoginButton from './Login'
import TicketsArea from './TicketsArea'

interface Props {
	bar: string
	user: object
	isAuthenticated: boolean
	token: string
	setMenu: React.Dispatch<SetStateAction<boolean>>
}

interface GameInfo {
	gameisActive: boolean
	gamePrizes: Array<{prize: string, code: string}>
	gameEndDate: string
}

const Game = ({ bar, user, isAuthenticated, token, setMenu }: Props) => {
	const [loading, setLoading] = useState(false)
	const [cupons, setCupons] = useState<number[]>([])
	const [code, setCode] = useState('')
	const [loadingCode, setLoadingCode] = useState(false)
	const [gameInfo, setGameInfo] = useState<GameInfo>({gamePrizes: [], gameEndDate: '', gameisActive: false})
	const [showInfo, setShowInfo] = useState(false)
	const [invalidCode, setInvalidCode] = useState(false)

	useEffect(() => {
		if (user && token) getTickets()
	}, [user, token])

	const sendCode = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (loadingCode) return
		setLoadingCode(true)
		setInvalidCode(false)

		const response = await fetch(`${API_BASE_URL}/api/newcode`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ code, bar, user }),
		})
		const data = await response.json()
		setCode('')

		if(!data.isActive){
			console.log('No esta activo')
			setGameInfo({...gameInfo, gameisActive: false})
		}

		if (data.validCode === false) {
			setLoadingCode(false)
			setInvalidCode(true)
			setTimeout(() => {setInvalidCode(false)}, 3000)
			return
		}
		setCupons(data.numbers)
		setLoadingCode(false)
	}

	async function getTickets() {
		setLoading(true)
		const response = await fetch(`${API_BASE_URL}/api/gettickets`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user, bar }),
		})
		const data = await response.json()
		if (response.status !== 200) {
			console.error(data, 'Algo ha ido mal, quizas el token de usuario no sea válido.')
			return
		}
		setGameInfo({
			gameisActive: data.isActive,
			gamePrizes: data.gamePrizes, 
			gameEndDate: data.gameEndDate
		})
		setCupons(data.userNumbers)
		setLoading(false)
	}


	if (loading) return <Loading header={false} bar='Trivify.es' setMenu={setMenu} msg={'Llamando al presidente...'}/>
	return (
		<div className='game-container width-100'>
			<div className='code-area'>
				{!isAuthenticated ? <LoginButton /> : gameInfo.gameisActive && isAuthenticated ? <CodeForm sendCode={(e) => sendCode(e)} setCode={setCode} code={code} loading={loadingCode} /> : <h3 className='closed'>El juego está cerrado.</h3>}
			</div>
			{showInfo && <InfoPopup bar={bar} setShowInfo={()=> setShowInfo(false)} gamePrizes={gameInfo.gamePrizes} gameEndDate={gameInfo.gameEndDate ? gameInfo.gameEndDate : '?'}/>}
			<p className='invalid-code'>{invalidCode && '- Código incorrecto -'}</p>
			<GameInfoBar setShowInfo={()=> setShowInfo(true)} gameEndDate={gameInfo.gameEndDate ? gameInfo.gameEndDate : '?'}/>
			<TicketsArea cupons={cupons} />
		</div>
	)
}

export default Game


const format = (inputDate: Date) => {
	let date, month
	const year = inputDate.getFullYear()

	date = inputDate.getDate()
	month = inputDate.getMonth() + 1

	date = date
		.toString()
		.padStart(2, '0')

	month = month
		.toString()
		.padStart(2, '0')

	return `${date}-${month}-${year}`
}