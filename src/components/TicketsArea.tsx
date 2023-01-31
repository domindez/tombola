import React from 'react'
import Ticket from './Ticket'
import '../sass/TicketsArea.scss'

interface Props {
	cupons: Array<number>
}

const TicketsArea = ({ cupons }: Props) => {
	const PLACEHOLDER_NUM = 20

	return (
		<div className='tickets-area'>
			{cupons.length >= PLACEHOLDER_NUM
				? cupons.map((cupon, index) => {
					return <Ticket key={index} ticketNumber={cupon} num={index} />
				})
				: [...cupons, ...Array(PLACEHOLDER_NUM - cupons.length).fill('')].map(
					(cupon, index) => {
						return <Ticket key={index} ticketNumber={cupon} num={index} />
					}
				)}
		</div>
	)
}
export default TicketsArea
		