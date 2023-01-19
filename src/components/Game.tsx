import React, { useEffect, useState } from 'react'
import '../sass/Game.scss'
import CodeForm from './CodeForm'
import Loading from './Loading'
import TicketsArea from './TicketsArea'

interface Props {
	bar: string
}

const Game = ({ bar }: Props) => {
	const [cupons, setCupons] = useState([])
	const [code, setCode] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		localStorage.getItem(`tombola-${bar}-ID`) ??
			localStorage.setItem(`tombola-${bar}-ID`, String(new Date().getTime()))
	}, [])

	const sendCode = async (e: React.FormEvent<HTMLFormElement>) => {
		setLoading(true)
		e.preventDefault()
		const response = await fetch('http://localhost:4000/api/newcode', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ code, bar }),
		})

		const data = await response.json()
		setCode('')

		console.log('data :>> ', data)
		setLoading(false)
	}

	return (
		<div className='game-container'>
			<CodeForm sendCode={(e) => sendCode(e)} setCode={setCode} code={code} />
			<Loading loading={loading} />
			<TicketsArea cupons={cupons} />
		</div>
	)
}

export default Game
