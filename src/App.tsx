import React from 'react'
import SalaPremier from './pages/SalaPremier'
import Test from './pages/Test'
import { Routes, Route } from 'react-router-dom'

import './sass/App.scss'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/premier' element={<SalaPremier />} />
				<Route path='/test' element={<Test />} />
			</Routes>
		</div>
	)
}

export default App
