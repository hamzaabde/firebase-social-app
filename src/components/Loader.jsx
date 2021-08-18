import React from 'react'

export default ({ height }) => {
	return (
		<div
			className="flex-grow-1 d-flex align-items-center justify-content-center vw-100"
			style={{ height }}
		>
			<div
				className="spinner-border text-dark"
				style={{ width: '4rem', height: '4rem' }}
			></div>
		</div>
	)
}
