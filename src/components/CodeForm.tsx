import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface Props {
	barName: string
}

const CodeForm = ({ barName }: Props) => {
	const [code, setCode] = useState('')
	const [loading, setLoading] = useState(false)
	const bar = barName

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
		console.log(code)

		console.log('data :>> ', data)
		setLoading(false)
	}

	return (
		<>
			<form onSubmit={sendCode} className='new-code-form'>
				<input
					onChange={(e) => setCode(e.target.value)}
					name='code'
					value={code}
					required
					className='code-input'
					type='text'
					autoComplete='off'
					placeholder='Introduce el código'
					maxLength={6}
				/>
				<button type='submit'>
					<FontAwesomeIcon icon={faCheck} />
				</button>
			</form>
			{loading && <h3 className='input-msg'>Validando código...</h3>}
		</>
	)
}

export default CodeForm
