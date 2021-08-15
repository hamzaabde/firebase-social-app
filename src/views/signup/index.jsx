import React from 'react'

// components
import LoginForm from './form'

export default () => (
	<div className="container-fluid p-0 vh-100">
		<div className="d-flex flex-column align-items-stretch h-100">
			<h1 className="fs-4 text-center mb-0 py-3 text-white bg-dark">BubbleMesh</h1>
			<LoginForm />
		</div>
	</div>
)
