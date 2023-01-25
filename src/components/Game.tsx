import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import '../sass/Game.scss'
import CodeForm from './CodeForm'
import LoginButton from './Login'
import TicketsArea from './TicketsArea'

interface Props {
	bar: string
}

let userID: string | null

const Game = ({ bar }: Props) => {
	const [cupons, setCupons] = useState<number[]>([])
	const [code, setCode] = useState('')
	const [loading, setLoading] = useState(false)

	const { user, isAuthenticated } = useAuth0()


	useEffect(() => {
		localStorage.getItem('tombola-trivify-ID') ?? localStorage.setItem('tombola-trivify-ID', String(new Date().getTime()))
		userID = localStorage.getItem('tombola-trivify-ID')
		getTickets(bar, setCupons)
	}, [])

	const sendCode = async (e: React.FormEvent<HTMLFormElement>) => {
		if (loading) return
		setLoading(true)
		e.preventDefault()
		const response = await fetch('http://localhost:4000/api/newcode', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ code, bar, userID }),
		})

		const data = await response.json()
		setCode('')
		console.log('data :>> ', data)
		if (data.msg === 'Código incorrecto') {
			setLoading(false)
			return
		}
		setCupons(data)
	}

	return (
		<div className='game-container'>
			<div className='code-area'>
				{isAuthenticated ? <CodeForm sendCode={(e) => sendCode(e)} setCode={setCode} code={code} loading={loading} /> : <LoginButton />}
			</div>
			<TicketsArea cupons={cupons} />
		</div>
	)
}

export default Game

async function getTickets(bar: string, setCupons: React.Dispatch<React.SetStateAction<number[]>>) {
	const response = await fetch('http://localhost:4000/api/gettickets', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ userID, bar }),
	})
	const data = await response.json()
	setCupons(data)
}

