import React from 'react'

// icons
import { BsPlus } from 'react-icons/bs'

// hooks
import useMediaQuery from '@hooks/useMediaQuery'
import useSearchUsers from '@hooks/useSearchUsers'

// router
import { Link } from 'react-router-dom'

// components
import Bottombar from '@components/Bottombar'
import Sidebar from '@components/Sidebar'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { RoundedImg } from '@components/containers'

const User = ({ user }) => (
	<div className="d-flex align-items-center justify-content-between border border-2 p-1 my-2">
		<Link
			to={`/profile/${user.uid}`}
			className="d-flex align-items-center"
			style={{ textDecoration: 'none' }}
		>
			<RoundedImg src={user.profileImage} size="3rem" />
			<h3 className="flex-grow-1  ms-4 mb-0 text-center">{user.username}</h3>
		</Link>
		<button
			className="btn btn-primary d-flex align-items-center"
			onClick={() => {
				console.log(`adding ${user.username} to your friends list`)
			}}
		>
			<BsPlus className="text-white" size="2rem" />
			<span>add freinds</span>
		</button>
	</div>
)

const Search = () => {
	const { users, error } = useSearchUsers()

	return (
		<div>
			<div className="d-flex flex-column">
				{users && users.map(user => <User key={user.uid} user={user} />)}
			</div>
		</div>
	)
}

export default () => {
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
									<Scrollbars
										renderThumbVertical={props => (
											<div
												{...props}
												style={{ backgroundColor: 'transparent' }}
											/>
										)}
										autoHeight
										autoHeightMin="100%"
										style={{
											height: '100%',
										}}
									>
										<Search />
									</Scrollbars>
								</div>
							</div>
						</div>
					) : smallScreens ? (
						<>
							<div className="flex-grow-1 bg-white overflow-hidden p-0">
								<Scrollbars
									renderThumbVertical={props => (
										<div
											{...props}
											style={{ backgroundColor: 'transparent' }}
										/>
									)}
									autoHeight
									autoHeightMin="100%"
									style={{
										height: '100%',
									}}
								>
									<Search />
								</Scrollbars>
							</div>
							<Bottombar />
						</>
					) : null}
				</div>
			</div>
		</div>
	)
}
