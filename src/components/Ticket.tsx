import React from 'react'
import '../sass/Ticket.scss'

interface Props {
	ticketNumber: number | string
	num: number
}

const Ticket = ({ ticketNumber, num }: Props) => {
	const lastDigitStr = String(ticketNumber).slice(-1)
	const lastDigit = Number(lastDigitStr)
	let color
	if (lastDigit === 0 || lastDigit === 5) color = 'red'
	if (lastDigit === 1 || lastDigit === 6) color = 'green'
	if (lastDigit === 2 || lastDigit === 7) color = 'orange'
	if (lastDigit === 3 || lastDigit === 8) color = 'violet'
	if (lastDigit === 4 || lastDigit === 9) color = 'blue'

	if (ticketNumber === '') color = 'empty'

	return (
		<div className={ticketNumber === '' ? 'ticket empty-ticket' : 'ticket'}>
			<p
				className={
					ticketNumber === '' && num === 3
						? `ticket__number ${color} bonus`
						: ticketNumber === '' && num === 9
							? `ticket__number ${color} bonus`
							: ticketNumber === '' && num === 14
								? `ticket__number ${color} bonus`
								: ticketNumber === '' && num === 19
									? `ticket__number ${color} bonus`
									: `ticket__number ${color}`
				}
			>
				{ticketNumber}
				{ticketNumber === '' && num === 3 && 'x2'}
				{ticketNumber === '' && num === 9 && 'x2'}
				{ticketNumber === '' && num === 14 && 'x2'}
				{ticketNumber === '' && num === 19 && 'x5'}
			</p>
		</div>
	)
}

export default Ticket
