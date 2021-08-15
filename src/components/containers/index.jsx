import React from 'react'

export const RoundedImg = ({ src }) => {
	return (
		<div style={{ width: '2.5rem', height: '2.5rem' }}>
			<img src={src} className="img-thumbnail rounded-circle" />
		</div>
	)
}
