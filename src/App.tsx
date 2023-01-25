import React, { useState, useEffect } from 'react'
import SalaPremier from './pages/SalaPremier'
import Test from './pages/Test'
import { Routes, Route } from 'react-router-dom'
import './sass/App.scss'
import Home from './pages/Home'
import Callback from './pages/Callback'

function App() {


	useEffect(() => {

		const lastRoute = localStorage.getItem('trivify-lastroute')
		if (window.location.pathname !== '/tombola/callback') {
			localStorage.setItem('trivify-lastroute', window.location.pathname)
		} else if (lastRoute) {
			setTimeout(() => {
				window.location.replace(lastRoute)
			}, 500)
		}

	}, [])

	console.log(localStorage.getItem('trivify-lastroute'))
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/callback' element={<Callback />} />
				<Route path='/premier' element={<SalaPremier />} />
				<Route path='/test' element={<Test />} />
			</Routes>
		</div>
	)
}

export default App
