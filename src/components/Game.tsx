import React, { useState } from 'react'
import '../sass/Game.scss'
import CodeForm from './CodeForm'
import Loading from './Loading'
import TicketsArea from './TicketsArea'

interface Props {
	barName: string
}

const Game = ({ barName }: Props) => {
	const [code, setCode] = useState('')
	const [loading, setLoading] = useState(false)

	const sendCode = async (e: React.FormEvent<HTMLFormElement>) => {
		setLoading(true)
		e.preventDefault()
		const response = await fetch('http://localhost:4000/api/newcode', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ code, barName }),
		})

		const data = await response.json()
		setCode('')
		console.log(code)

		console.log('data :>> ', data)
		setLoading(false)
	}

	return (
		<div className='game-container'>
			<CodeForm
				sendCode={(e) => sendCode(e)}
				setCode={setCode}
				code={code}
			/>
			<Loading loading={loading}/>
			<TicketsArea />
		</div>
	)
}

export default Game
