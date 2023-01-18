import React from 'react'
import '../sass/Game.scss'
import CodeForm from './CodeForm'
import TicketsArea from './TicketsArea'

interface Props {
	barName: string
}

const Game = ({ barName }: Props) => {
	return (
		<div className='game-container'>
			<CodeForm barName={barName} />
			<TicketsArea />
		</div>
	)
}

export default Game
