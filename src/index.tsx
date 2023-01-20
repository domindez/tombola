import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	// <React.StrictMode>
	<BrowserRouter basename='/tombola'>
		<App />
	</BrowserRouter>

	// </React.StrictMode>
)
