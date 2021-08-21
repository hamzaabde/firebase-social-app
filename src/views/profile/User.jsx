import React, { useState } from 'react'

// icons
import { BsPeopleCircle } from 'react-icons/bs'

// hooks
import useMediaQuery from '@hooks/useMediaQuery'
import useFetchUser from '@hooks/useFetchUser'

// components
import Bottombar from '@components/Bottombar'
import Sidebar from '@components/Sidebar'
import { RoundedImg } from '@components/containers'

// const activateTab = (a, aa) => (a === aa ? 'active' : null)

// const toggle = (a, aa) => e => a(aa)

const User = ({ user }) => {
	return (
		<div>
			<div className="row align-items-center py-2">
				<div className="col-auto">
					{user ? (
						<RoundedImg src={user.profileImage} size="6rem" />
					) : (
						<BsPeopleCircle size="6rem" />
					)}
				</div>
				<div className="col">
					<h1 className="fs-4 mb-0">{user && user.username}</h1>
				</div>
			</div>
			{/* nav menu */}
			{/* <div className="tabs"> */}
			{/* tab nav */}
			{/* <div className="nav nav-pills">
					<button
						className={`nav-item nav-link ${activateTab(
							activeTab,
							'friends'
						)}`}
						onClick={toggle(setActiveTab, 'friends')}
					>
						Friends
					</button>
					<button
						className={`nav-item nav-link ${activateTab(activeTab, 'posts')}`}
						onClick={toggle(setActiveTab, 'posts')}
					>
						Posts
					</button>
				</div> */}

			{/* tab pane */}
			{/* </div> */}
		</div>
	)
}

export default () => {
	const { user, error } = useFetchUser()

	// screens
	const smallScreens = useMediaQuery('(min-width: 280px)')
	const largeScreens = useMediaQuery('(min-width: 800px)')

	return (
		<div className="flex-grow-1 row justify-content-center m-0 p-0">
			<div className="col col-xl-10 co-xxl-8 h-100" style={{ maxWidth: 1400 }}>
				<div className="h-100 d-flex flex-column">
					{largeScreens ? (
						<div className="flex-grow-1 row">
							<div className="position-relative col-3 h-100">
								<Sidebar />
								<p className="position-absolute bottom-0 mb-5 w-100 fs-6 fw-bolder text-center text-dark">
									All rights reserved &copy;
								</p>
							</div>
							<div className="col-8 h-100">
								<div className="flex-grow-1 h-100">
									<User user={user} />
								</div>
							</div>
						</div>
					) : smallScreens ? (
						<>
							<div className="flex-grow-1 bg-white overflow-hidden p-0">
								<User user={user} />
							</div>
							<Bottombar />
						</>
					) : null}
				</div>
			</div>
		</div>
	)
}
