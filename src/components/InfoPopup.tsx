import React from 'react'
import '../sass/GameInfoBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

interface Props {
	gamePrizes: Array<string>
	gameEndDate: string
	bar: string
	setShowInfo: (show: boolean) => void

}

const InfoPopup = ({ bar, gamePrizes, gameEndDate, setShowInfo }: Props) => {
	return (
		<div className='overlay'>
			<div className='info-popup'>
				<h3>Premios:</h3>
				{gamePrizes.map((prize, index) => {
					return <p className='prize' key={index}>{`· ${prize} ·`}</p>
				})}
				<br />
				<h3>Info del sorteo</h3>
				<p className='prize'>{`${bar} ${gameEndDate}`}</p>
				<br />
				<h3>Instrucciones</h3>
				<p>
					Consigue un código con tu consumición, cuantos más acumules más
					posibilidades de ganar. Cuando se realice el sorteo recibirás un cupón
					canjeable si tienes el número ganador. Consúltalo en tu perfil.
				</p>
				<FontAwesomeIcon onClick={()=> setShowInfo(false)} className='close' icon={faClose} />
			</div>
		</div>
	)
}

export default InfoPopup
