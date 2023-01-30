import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import '../sass/BarTickets.scss'

interface Props {
	barName: string
	nCupons: number
}

const BarTickets = ({ nCupons, barName }: Props) => {
	type LinkTree = { [key: string]: string }

	// La estructura es -> barName : enlace
	const linkTree: LinkTree = {
		'Sala Premier': 'premier',
		Test: 'test',
	}

	const barUrl = linkTree[barName]

	return (
		<div className={barName? 'bar-tickets' : 'bar-tickets empty-bar'}>
			<div>
				<h4 className='bar-name'>{barName}</h4>
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
					<a href={`/tombola/${barUrl}`} className='btn'>
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
