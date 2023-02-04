import React, { SetStateAction } from 'react'
import '../sass/Popup.scss'

interface Props {
	setShowWinnerInfo: React.Dispatch<SetStateAction<boolean>>
	barName: string | undefined
	winner:string | undefined
	winnerNumber: number | undefined
}

const WinnerInfo = ({setShowWinnerInfo, barName, winner, winnerNumber}: Props) => {
	return (
		<div className='overlay'>
			<div className='popup info-winner'>
				<h2>Resultados:</h2>

				<h3>Ganador: <span>{winner}</span></h3>
			</div>
		</div>
	)
}

export default WinnerInfo