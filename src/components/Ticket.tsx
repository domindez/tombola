import React from 'react'
import '../sass/Ticket.scss'

interface Props {
	ticketNumber: number | string
}

const Ticket = ({ ticketNumber }: Props) => {
	const lastDigitStr = String(ticketNumber).slice(-1)
	const lastDigit = Number(lastDigitStr)
	let color
	if (lastDigit === 0 || lastDigit === 1) color = 'red'
	if (lastDigit === 2 || lastDigit === 3) color = 'green'
	if (lastDigit === 4 || lastDigit === 4) color = 'blue'
	if (lastDigit === 6 || lastDigit === 5) color = 'yellow'
	if (lastDigit === 8 || lastDigit === 9) color = 'orange'
	
	if (ticketNumber === '') color = 'empty'

	return (
		<div className={ticketNumber === '' ? 'ticket empty-ticket' :'ticket'}>
			<p className={`ticket__number ${color}`}>{ticketNumber}</p>
		</div>
	)
}

export default Ticket
