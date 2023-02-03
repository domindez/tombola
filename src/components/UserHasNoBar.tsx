import React from 'react'
import '../sass/BarTickets.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'

const UserHasNoBar = () => {

	const openQr = () =>{
		const userAgent = window.navigator.userAgent
		const isIOS = userAgent.match(/iPhone|iPad|iPod/i)
		const isAndroid = userAgent.match(/Android/i)

		if (isIOS) {
			window.location.href = 'scan://'
		} else if (isAndroid) {
			window.location.href = 'zxing://scan/'
		}
	}

	return (
		<div className='bar-tickets'>
			<h3 className='no-bar-msg'>Aun no tienes ninguna partida. Escanea un ticket para empezar.</h3>
			<FontAwesomeIcon onClick={openQr} className='qr' icon={faQrcode} />
		</div>
	)
}

export default UserHasNoBar