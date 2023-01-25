import React, { SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import '../sass/CodeForm.scss'

interface Props {
	sendCode: React.FormEventHandler<HTMLFormElement>
	setCode: React.Dispatch<SetStateAction<string>>
	code: string
	loading: boolean
}

const CodeForm = ({ sendCode, setCode, code, loading }: Props) => {
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
				<button type='submit' className={loading ? 'validating' : ''}>
					{loading ? <FontAwesomeIcon className='spinner' icon={faCircleNotch} />  : <FontAwesomeIcon icon={faCheck} />}
				</button>
			</form>
		</>
	)
}

export default CodeForm
