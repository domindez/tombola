import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './sass/App.scss'
import Games from './pages/Games'
import BarPage from './pages/BarPage'
import Profile from './pages/Profile'
import Callback from './pages/Callback'
import { useAuth0, User } from '@auth0/auth0-react'
import Loading from './components/Loading'
import LoginPage from './pages/LoginPage'
import WinnerTickets from './pages/WinnerTickets'
import Privacidad from './pages/Privacidad'
import PrivacyAlert from './components/PrivacyAlert'
import Page404 from './pages/Page404'
import API_BASE_URL from './config'

function App() {
	const { user, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0()
	
	const [menu, setMenu] = useState(false)
	const [userData, setUserData] = useState<User>({})
	const [token, setToken] = useState('')

	const [routes, setRoutes] = useState<{barName: string, url: string}[]>([])

	const getToken = async() =>{
		setToken(await getAccessTokenSilently())
	}

	useEffect(() => {
		redirect() 
		getRoutes()
		if (!user) return
		setUserData(user)
		getToken()
	}, [user])

	const getRoutes = async () => {
		const response = await fetch(`${API_BASE_URL}/api/getroutes`, {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		const routes = await response.json()
		setRoutes(routes)
	}

	if (isLoading || routes.length === 0) {
		return <Loading header={true} bar='Trivify.es' setMenu={setMenu} msg={'Adivinando el futuro...'} />
	}
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<LoginPage menu={menu} setMenu={setMenu}  user={userData} isAuthenticated={isAuthenticated} />} />
				<Route path='/games' element={<Games menu={menu} setMenu={setMenu}  user={userData} isAuthenticated={isAuthenticated} token={token}/>} />
				<Route path='/profile' element={<Profile menu={menu} setMenu={setMenu}  user={userData} isAuthenticated={isAuthenticated} token={token}/>} />
				<Route path='/privacy' element={<Privacidad menu={menu} setMenu={setMenu}  user={userData} isAuthenticated={isAuthenticated} />} />
				<Route path='/winner-tickets' element={<WinnerTickets menu={menu} setMenu={setMenu}  user={userData} isAuthenticated={isAuthenticated} token={token}/>} />
				<Route path='/callback' element={<Callback token={token} menu={menu} setMenu={setMenu} user={userData} isAuthenticated={isAuthenticated} />} />
				{routes.map((bar, index)=>{
					return(<Route key={index} path={bar.url} element={<BarPage bar={bar.barName} menu={menu} setMenu={setMenu} user={userData} isAuthenticated={isAuthenticated} token={token}/>} />)
				})}
				<Route path='*' element={<Page404 menu={menu} setMenu={setMenu}  user={userData} isAuthenticated={isAuthenticated} />} />
			</Routes>
			{localStorage.getItem('tombola-tfy-cookies') !== 'accepted' &&  <PrivacyAlert />}
		</div>
	)
}

export default App


function redirect() {
	if (window.location.pathname !== '/tombola/callback' &&
		window.location.pathname !== '/tombola/games' &&
		window.location.pathname !== '/tombola/profile' &&
		window.location.pathname !== '/tombola/winner-tickets' &&
		window.location.pathname !== '/tombola/' &&
		window.location.pathname !== '/privacidad/' &&
		window.location.pathname !== '/tombola') {
		localStorage.setItem('trivify-lastroute', window.location.pathname)
	}
}

