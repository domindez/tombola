import React from 'react'
import '../sass/Header.scss'

interface Props {
	barName: string
}

const Header = ({ barName }: Props) => {
	return (
		<>
			<div className='header'>
				<h1>
					La Rifa
					<span className='header__small'>de {barName}</span>
				</h1>
			</div>
		</>
	)
}

export default Header
