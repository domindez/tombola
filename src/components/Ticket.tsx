import React from 'react'
import '../sass/Ticket.scss'

interface Props {
	ticketNumber: number
}

const Ticket = ({ ticketNumber }: Props) => {
	return (
		<div className='ticket'>
			<p className='ticket__number'>{ticketNumber}</p>
		</div>
	)
}

export default Ticket
