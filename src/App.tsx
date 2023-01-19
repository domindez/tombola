import React from 'react'
import Game from './components/Game'
import Header from './components/Header'
import './sass/App.scss'

function App() {
	return (
		<div className='App'>
			<Header bar='Sala Premier' />
			<Game bar='Sala Premier' />
		</div>
	)
}

export default App
