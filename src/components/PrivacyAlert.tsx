import React, {useState} from 'react'
import '../sass/PrivacyAlert.scss'

const PrivacyAlert = () => {
	const [show, setShow] = useState(true)

	const acceptCookies = () =>{
		localStorage.setItem('tombola-tfy-cookies', 'accepted')
		setShow(false)
	}

	if(!show) return <></>

	return (
		<div className='privacy-alert'>
			<p>
				Usamos cookies propias y de terceros con propósitos funcionales y de
				experiencia de usuario. <a href="/tombola/privacy">Más info</a>
			</p>
			<button onClick={acceptCookies}> Entendido!</button>
		</div>
	)
}

export default PrivacyAlert
