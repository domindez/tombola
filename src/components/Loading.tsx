import React, { SetStateAction } from 'react'
import '../sass/Loading.scss'
import Header from './Header'

interface Props {
	bar: string,
	setMenu: React.Dispatch<SetStateAction<boolean>>
	msg: string
}

const Loading = ({bar, setMenu, msg} : Props) => {
	return (		
		<>
			<Header bar={bar} setMenu={setMenu} isMenu={false}/>
			<div className='loading'>
				<div className='loader-container'>
					<div className="loader"></div>
					{msg}
				</div>
			</div>
		</>
	)
}

export default Loading