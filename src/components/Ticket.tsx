import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretLeft, faCaretRight, faCaretUp } from '@fortawesome/free-solid-svg-icons'
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
	if (lastDigit === 3 || lastDigit === 8) color = 'yellow'
	if (lastDigit === 4 || lastDigit === 0) color = 'blue'

	if (ticketNumber === '') color = 'empty'

	return (
		<div className={ticketNumber === '' ? 'ticket empty-ticket' : 'ticket'}>

			<p className={`ticket__number ${color}`}>
				{ticketNumber}
				{ticketNumber === '' && num === 3 && 'x2'}
				{ticketNumber === '' && num === 9 && 'x2'}
				{ticketNumber === '' && num === 14 && 'x2'}
				{ticketNumber === '' && num === 19 && 'x5'}
			</p>
			<div className='bonus-top'>
				{num === 3 && <FontAwesomeIcon icon={faCaretDown}/>}
				{num === 9  && <FontAwesomeIcon icon={faCaretDown}/>}
				{num === 14 && <FontAwesomeIcon icon={faCaretDown}/>}
				{num === 19 && <FontAwesomeIcon icon={faCaretDown}/>}
			</div>
			<div className='bonus-right'>
				{num === 3 && <FontAwesomeIcon icon={faCaretLeft}/>}		
				{num === 9  && <FontAwesomeIcon icon={faCaretLeft}/>}		
				{num === 14 && <FontAwesomeIcon icon={faCaretLeft}/>}		
				{num === 19 && <FontAwesomeIcon icon={faCaretLeft}/>}		
			</div>
			<div className='bonus-bottom'>
				{num === 3 && <FontAwesomeIcon icon={faCaretUp}/>}		
				{num === 9  && <FontAwesomeIcon icon={faCaretUp}/>}		
				{num === 14 && <FontAwesomeIcon icon={faCaretUp}/>}		
				{num === 19 && <FontAwesomeIcon icon={faCaretUp}/>}		
			</div>
			<div className='bonus-left'>
				{num === 3 && <FontAwesomeIcon icon={faCaretRight}/>}		
				{num === 9  && <FontAwesomeIcon icon={faCaretRight}/>}		
				{num === 14 && <FontAwesomeIcon icon={faCaretRight}/>}		
				{num === 19 && <FontAwesomeIcon icon={faCaretRight}/>}		
			</div>
		</div>
	)
}

export default Ticket
