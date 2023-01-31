import React, { useEffect, useState } from 'react'
import '../sass/Game.scss'
import CodeForm from './CodeForm'
import LoginButton from './Login'
import TicketsArea from './TicketsArea'

interface Props {
	bar: string
	user: object
	isAuthenticated: boolean
	token: string
}

const Game = ({ bar, user, isAuthenticated, token }: Props) => {
	const [cupons, setCupons] = useState<number[]>([])
	const [code, setCode] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (user && token) getTickets()
	}, [user, token])

	const sendCode = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (loading) return
		setLoading(true)

		const response = await fetch('http://localhost:4000/api/newcode', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ code, bar, user }),
		})
		const data = await response.json()
		setCode('')

		if (data.validCode === false) {
			setLoading(false)
			// Aquí poner un estado para que se muestre el mensaje al usuario
			console.log('El código es incorrecto')
			return
		}

		setCupons(data.numbers)
		setLoading(false)

	}

	async function getTickets() {

		const response = await fetch('http://localhost:4000/api/gettickets', {
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


