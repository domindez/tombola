import { User } from '@auth0/auth0-react'
import React from 'react'
import '../sass/WinnerTickets.scss'

interface Props {
	winCode: string
	bar: string
	date: string
	winNumber: number
}

const WinCard = ({ winCode, bar, date, winNumber}: Props) => {
	return (
		<div className='win-card'>
			<h3>{bar}</h3>
			<div className='win-card-info'>
				<div className='left-card'>
					<div className='ticket__number red winner-num'>{winNumber}</div>
				</div>
				<div className='right-card'>
					<p className='win-code'>{winCode}</p>			
					<p>válido hasta: {date}</p>
				</div>
			</div>
			<p className='instructions'>Entrega este código a tu camarero para ganar el premio.</p>
		</div>
	)
}

export default WinCard