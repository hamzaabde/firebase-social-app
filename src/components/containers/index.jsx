import React from 'react'

export const RoundedImg = ({ src, size = '2.5rem' }) => {
	return (
		<div
			className="rounded-circle bg-secondary"
			style={{ width: size, height: size }}
		>
			<img src={src} className="img-thumbnail w-100 h-100 rounded-circle" />
		</div>
	)
}
