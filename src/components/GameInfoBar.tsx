import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import '../sass/GameInfoBar.scss'
import InfoPopup from './InfoPopup'

interface Props {
	gamePrizes: Array<string>
	gameEndDate: string
	setShowInfo: (show: boolean) => void
}

const GameInfoBar = ({ gamePrizes, gameEndDate, setShowInfo }: Props) => {

	return (
		<div className='game-info-bar'>
			<h3>
				Premios:{' '}
				<FontAwesomeIcon
					className='info-icon'
					onClick={() => setShowInfo(true)}
					icon={faQuestion}
				/>
			</h3>
			<h3>Fecha Sorteo: <span className='date'>{gameEndDate}</span></h3>
		</div>
	)
}

export default GameInfoBar
