import React from 'react'

// components
import Post from './Post'

export default ({ children }) => {
	return (
		<div>
			<div className="py-2 d-flex flex-column align-items-center bg-light">
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	)
}
