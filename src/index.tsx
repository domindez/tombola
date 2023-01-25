import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<BrowserRouter basename='/tombola'>
			<Auth0Provider
				domain='trivify.uk.auth0.com'
				clientId='lxHR4UU1972YhdvA2MviRAmroSB18rlS'
				authorizationParams={{
					redirect_uri: `${window.location.origin}/tombola/callback`
				}}>
				<App />
			</Auth0Provider>
		</BrowserRouter>
	</React.StrictMode>
)
