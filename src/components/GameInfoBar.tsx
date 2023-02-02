import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import '../sass/GameInfoBar.scss'

interface Props {
	gameEndDate: string
	setShowInfo: (show: boolean) => void
}

const GameInfoBar = ({ gameEndDate, setShowInfo }: Props) => {

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
