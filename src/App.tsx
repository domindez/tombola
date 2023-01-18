import React from 'react'
import Game from './components/Game'
import Header from './components/Header'
import './sass/App.scss'

function App() {
	return (
		<div className='App'>
			<Header barName='Sala Premier' />
			<Game barName='Sala Premier'/>
		</div>
	)
}

export default App
