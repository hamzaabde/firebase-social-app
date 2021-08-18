import React from 'react'

// hooks
import useMediaQuery from '@hooks/useMediaQuery'

// components
import Main from './Main'
import Bottombar from '@components/Bottombar'
import Sidebar from '@components/Sidebar'
import { Scrollbars } from 'react-custom-scrollbars-2'

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
										<Main />
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
									<Main />
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
