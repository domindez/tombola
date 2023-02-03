import React from 'react'

interface Props {
	tittle: string
	text: string
	btnYes: 'Aceptar'
	btnNo: 'Cancelar'
	onCancel: (arg0: unknown) => unknown
	onAccept: (arg0:  unknown) => unknown
}

const Popup = ({tittle, text, btnYes, btnNo, onAccept, onCancel}: Props) => {
	return (
		<div className='overlay'>
			<div className='popup'>
				<h2>{tittle}</h2>
				<p>{text}</p>
				<div className='btn-container'>
					<button className='accept' onClick={onAccept}>{btnYes}</button>
					<button className='cancel' onClick={onCancel}>{btnNo}</button>
				</div>
			</div>
		</div>
	)
}

export default Popup