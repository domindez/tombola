import React, { useEffect, useState } from 'react'
import SalaPremier from './pages/SalaPremier'
import Test from './pages/Test'
import { Routes, Route } from 'react-router-dom'
import './sass/App.scss'
import Home from './pages/Home'
import Callback from './pages/Callback'
import { useAuth0 } from '@auth0/auth0-react'
import Loading from './components/Loading'

function App() {

	const { user, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0()

	const [userData, setUserData] = useState<any>({})
	const [userAuthenticated, setUserAuthenticated] = useState(false)
	const [token, setToken] = useState('')

	const getToken = async() =>{
		setToken(await getAccessTokenSilently())
	}

	useEffect(() => {
		if (!user ) return
		setUserData(user)
		setUserAuthenticated(isAuthenticated)
		getToken()
		const lastRoute = localStorage.getItem('trivify-lastroute')
		if (window.location.pathname !== '/tombola/callback') {
			localStorage.setItem('trivify-lastroute', window.location.pathname)
		} else if (lastRoute) {
			setTimeout(() => {
				window.location.replace(lastRoute)
			}, 2000)
		}
		console.log('se ha vuelto a renderizar')
	}, [user])

	if (isLoading) return <Loading />

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home  user={userData} isAuthenticated={userAuthenticated} token={token}/>} />
				<Route path='/callback' element={<Callback user={userData} isAuthenticated={userAuthenticated} />} />
				<Route path='/premier' element={<SalaPremier  user={userData} isAuthenticated={userAuthenticated} token={token}/>} />
				<Route path='/test' element={<Test user={userData} isAuthenticated={userAuthenticated} token={token}/>} />
			</Routes>
		</div>
	)
}

export default App
