import React, { SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import '../sass/Popup.scss'

interface Props {
	setShowWinnerInfo: React.Dispatch<SetStateAction<boolean>>
	barName: string | undefined
	winner:string | undefined
	winnerNumber: number | undefined
}

const WinnerPopup = ({setShowWinnerInfo, barName, winner, winnerNumber}: Props) => {
	return (
		<div className='overlay'>
			<div className='popup info-winner'>
				<h2>Juego de {barName}</h2>
				<h3>Nº Ganador:</h3>
				<div className='ticket__number red'>{winnerNumber}</div>
				<h3>Lo tiene:</h3>
				<h3 className='winner-name'>{winner}</h3>
				<FontAwesomeIcon onClick={()=> setShowWinnerInfo(false)} className='close' icon={faClose} />
			</div>
			<div className='subtext'>
				Comprueba tus número ganadores <a href="/tombola/prizes">aquí</a>
			</div>
		</div>
	)
}

export default WinnerPopup