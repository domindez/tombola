import React from 'react'

interface Props {
	loading: boolean
}

const Loading = ({ loading }: Props) => {
	return (
		<>
			{loading ? (
				<h3 className='input-msg'>Validando código...</h3>
			) : (
				<h3 className='input-msg'></h3>
			)}
		</>
	)
}

export default Loading
