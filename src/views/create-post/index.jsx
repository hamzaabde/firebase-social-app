import React from 'react'

// hooks
import userCurrentUser from '@hooks/useCurrentUser'
import useScreenHeight from '@hooks/useScreenHeight'

// router
import { Redirect } from 'react-router-dom'

// components
import Navbar from '@components/Navbar'
import Loader from '@components/Loader'
import CreatePost from './CreatePost'

export default () => {
	const { user, error } = userCurrentUser()
	const height = useScreenHeight()

	if (user === null) return <Redirect to="/login" />

	if (user === undefined) return <Loader height={height} />

	return (
		<div className="container-fluid" style={{ height }}>
			<div className="d-flex flex-column h-100 mh-100">
				<Navbar user={user} />
				<CreatePost />
			</div>
		</div>
	)
}
