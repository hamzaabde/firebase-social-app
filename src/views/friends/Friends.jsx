import React from 'react'

// hooks
import useMediaQuery from '@hooks/useMediaQuery'
import useUserFriends from '@hooks/useUserFriends'

// router
import { Link } from 'react-router-dom'

// components
import Bottombar from '@components/Bottombar'
import Sidebar from '@components/Sidebar'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { RoundedImg } from '@components/containers'

const Friends = () => {
	const { friends, error } = useUserFriends()

	console.log(friends)

	return (
		<div>
			<div className="d-flex flex-column my-2">
				{friends &&
					friends.map(friend => (
						<Link
							key={friend.uid}
							to={`/profile/${friend.uid}`}
							style={{ textDecoration: 'none' }}
						>
							<div className="d-flex align-items-center mb-2 p-1 border border-2 rounded-2">
								<RoundedImg src={friend.profileImage} size="3rem" />
								<div className="mx-2 text-center">{friend.username}</div>
							</div>
						</Link>
					))}
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
										<Friends />
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
									<Friends />
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
