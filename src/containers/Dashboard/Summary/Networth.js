import React from 'react'
import withContext from '../../../components/ContextTab'

const Networth = ({ openContext }) => {

	const handleOpenContext = () => {
		openContext(
			<div>Hellooo</div>,
			'Networth information'
		)
	}

	return (
		<div onClick={handleOpenContext}>Networth</div>
	)
}

export default withContext(Networth)