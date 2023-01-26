import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import '../sass/Game.scss'
import CodeForm from './CodeForm'
import LoginButton from './Login'
import TicketsArea from './TicketsArea'

interface Props {
	bar: string
}

const Game = ({ bar }: Props) => {
	const [cupons, setCupons] = useState<number[]>([])
	const [code, setCode] = useState('')
	const [loading, setLoading] = useState(false)
	const [userData, setUserData] = useState<any>(null)

	const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

	useEffect(() => {
		if (user) getTickets()
	}, [user])

	const sendCode = async (e: React.FormEvent<HTMLFormElement>) => {
		if (loading) return
		setLoading(true)
		const token = await getAccessTokenSilently()
		e.preventDefault()
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
		console.log('data :>> ', data)
		if (data.msg === 'Código incorrecto') {
			setLoading(false)
			return
		}
		setCupons(data)
	}

	async function getTickets() {
		const token = await getAccessTokenSilently()
		const response = await fetch('http://localhost:4000/api/gettickets', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user, bar }),
		})
		const data = await response.json()
		console.log(data)
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


