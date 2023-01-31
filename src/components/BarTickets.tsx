import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import '../sass/BarTickets.scss'

interface Props {
	barName: string
	nCupons: number
	url: string
}

const BarTickets = ({ nCupons, barName, url }: Props) => {
	return (
		<div className={barName ? 'bar-tickets' : 'bar-tickets empty-bar'}>
			<div>
				{barName ? (
					<h4 className='bar-name'>{barName}</h4>
				) : (
					<h4 className='bar-name greybox'>{barName}</h4>
				)}
			</div>
			<div>
				{barName ? (
					<h4 className='n-cupons'>{nCupons}</h4>
				) : (
					<h4 className='n-cupons grey'></h4>
				)}
			</div>
			<div>
				{barName ? (
					<a href={`/tombola/${url}`} className='btn'>
						<FontAwesomeIcon icon={faArrowRightFromBracket} />
					</a>
				) : (
					<div className='btn grey'></div>
				)}
			</div>
		</div>
	)
}

export default BarTickets
