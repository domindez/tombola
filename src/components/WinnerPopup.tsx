import React, { SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import '../sass/Popup.scss'

interface Props {
	setShowWinnerInfo: React.Dispatch<SetStateAction<boolean>>
	barName: string | undefined
	winnerInfo: any[]
}

const WinnerPopup = ({setShowWinnerInfo, barName, winnerInfo}: Props) => {
	return (
		<div className='overlay'>
			<div className='popup info-winner'>
				<h2>Resultados de {barName}</h2>
				<h3 className='subtittle'><span className='num-tittle'>Número:</span><span className='prize-tittle'>Premio:</span></h3>
				{winnerInfo.map((item, index) => {
					return(
						<div className='winner-info' key={index}>
							<div className='ticket__number red'>{item.winnerNumber}</div>
							<h3 className='prize'>{item.prize}</h3>
						</div>
					)
				})}
				<FontAwesomeIcon onClick={()=> setShowWinnerInfo(false)} className='close' icon={faClose} />
			</div>
			<div className='subtext'>
				Comprueba tus número ganadores <a href="/tombola/winner-tickets">aquí</a>
			</div>
		</div>
	)
}

export default WinnerPopup