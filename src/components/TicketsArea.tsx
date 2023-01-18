import React from 'react'
import Ticket from './Ticket'
import '../sass/TicketsArea.scss'

const TicketsArea = () => {
	return (
		<div className='tickets-area'>
			<Ticket ticketNumber={2} />
			<Ticket ticketNumber={2} />
		</div>
	)
}

export default TicketsArea
