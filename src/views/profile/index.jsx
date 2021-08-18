import React from 'react'

// hooks
import userCurrentUser from '@hooks/useCurrentUser'
import useScreenHeight from '@hooks/useScreenHeight'

// router

// components
import Navbar from '@components/Navbar'
import Bottombar from '@components/Bottombar'
import Sidebar from '@components/Sidebar'

export default () => {
	const user = userCurrentUser()
	const height = useScreenHeight()

	return (
		<div className="container-fluid" style={{ height }}>
			<div className="d-flex flex-column h-100 mh-100">
				<Navbar user={user} />
			</div>
		</div>
	)
}
