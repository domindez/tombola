import React, { SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import '../sass/BarTickets.scss'

interface Props {
	barName: string
	nCupons: number
	url: string
	isActive: boolean | undefined
	setShowWinnerInfo: React.Dispatch<SetStateAction<boolean>>
	setBarClicked: React.Dispatch<SetStateAction<string>>
}

const BarTickets = ({
	nCupons,
	barName,
	url,
	isActive,
	setShowWinnerInfo,
	setBarClicked,
}: Props) => {
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
				{isActive ? (
					<a href={`/tombola/${url}`} className='btn'>
						<FontAwesomeIcon icon={faArrowRightFromBracket} />
					</a>
				) : isActive === false ? (
					<button
						className='closed'
						onClick={() => {
							setBarClicked(barName)
							setShowWinnerInfo(true)
						}}
					>
						Ver Ganador
					</button>
				) : (
					<div className='btn grey'></div>
				)}
			</div>
		</div>
	)
}

export default BarTickets
