import React, { useState, useEffect, useRef } from 'react'

// icons
import {
	BsThreeDotsVertical,
	BsSearch,
	BsPencilSquare,
	BsPeopleCircle,
	BsBoxArrowRight,
} from 'react-icons/bs'

// firebase
import { logout } from '@firebase/auth'

// hooks
import useMediaQuery from '@hooks/useMediaQuery'

// router
import { Link } from 'react-router-dom'

// components
import { RoundedImg } from '@components/containers'

const clearToggle = (toggler, checkEl, toggleState) => {
	useEffect(() => {
		const handler = e => {
			e.preventDefault()

			const eventPath = e.path

			console.log(eventPath)

			if (eventPath.includes(checkEl.current)) {
				console.log('on button')
				console.log(checkEl)
				toggler(!toggleState)
			} else {
				console.log('outside button')
				toggler(false)
			}
		}

		document.addEventListener('click', handler)

		return () => document.removeEventListener('click', handler)
	}, [toggleState])
}

const MobileAndTablet = ({ user, sm, md }) => {
	const [menu, toggleMenu] = useState(false)
	const smallScreenMenuToggle = useRef()

	clearToggle(toggleMenu, smallScreenMenuToggle, menu)

	return (
		<>
			{/* logo */}
			<div className={`${md ? 'col-auto' : 'col-12'}`}>
				<h1 className="my-2 fs-4 fw-bolder text-center text-white">BubbleMesh</h1>
			</div>

			{/* search and tabs */}
			<div className="col flex-shrink-1">
				<form className="form">
					<div className="input-group">
						<label
							htmlFor="search"
							className="input-group-text bg-white border-end-0"
						>
							<BsSearch size="1.5rem" color="dark" />
						</label>
						<input
							type="search"
							id="search"
							className="form-control border-start-0"
							style={{
								maxWidth: 270,
							}}
							autoComplete="search"
							name="search"
							placeholder={sm ? 'search bubblemesh' : 'search'}
						/>
					</div>
				</form>
			</div>

			{/* user profile and menu */}
			<div className="col-auto text-end position-relative">
				{/* menu */}
				{menu && (
					<div
						className="position-absolute mt-3 rounded-4 bg-secondary top-100 end-0"
						style={{
							zIndex: 1010,
						}}
					>
						<div className="d-flex align-items-stretch flex-column  rounded-4">
							<Link to="/edit-profile">
								<button className="btn btn-secondary py-2 px-3">
									<BsPencilSquare color="white" />
									<span className="ms-2">edit profile</span>
								</button>
							</Link>
							<button
								className="btn btn-danger text-start py-2 px-3"
								onClick={logout}
							>
								<BsBoxArrowRight color="white" />
								<span className="ms-2">logout</span>
							</button>
						</div>
					</div>
				)}

				{/* buttons */}
				<div className="btn-group">
					<Link to={`/profile/${user.uid}`}>
						<button className="btn text-truncate d-flex align-items-center flex-nowrap">
							{user && sm && (
								<span className="me-2 text-white fs-6 text-nowrap">
									{user.username.substr(0, 5)}...
								</span>
							)}
							{user ? (
								<RoundedImg src={user.profileImage} size="2rem" />
							) : (
								<BsPeopleCircle size="2rem" color="white" />
							)}
						</button>
					</Link>
					<button className="btn" ref={smallScreenMenuToggle}>
						<BsThreeDotsVertical size="1.8rem" color="white" />
					</button>
				</div>
			</div>
		</>
	)
}

const Laptop = ({ user, md }) => {
	const [menu, toggleMenu] = useState(false)
	const largeScreenMenuToggle = useRef()

	clearToggle(toggleMenu, largeScreenMenuToggle, menu)

	return (
		<>
			{/* logo */}
			<div className={`${md ? 'col-auto' : 'col-12'}`}>
				<h1 className="my-3 fs-5 fw-bolder text-center text-white">BubbleMesh</h1>
			</div>

			{/* search and tabs */}
			<div className="col flex-shrink-1">
				<form className="form">
					<div className="input-group">
						<label
							htmlFor="search"
							className="input-group-text bg-white border-end-0"
						>
							<BsSearch size="1.5rem" color="dark" />
						</label>
						<input
							type="search"
							id="search"
							className="form-control border-start-0"
							style={{
								maxWidth: 270,
							}}
							autoComplete="search"
							name="search"
							placeholder="search bubblemesh"
						/>
					</div>
				</form>
			</div>

			{/* user profile and menu */}
			<div className="col-auto text-end position-relative">
				{/* menu */}
				{menu && (
					<div
						className="position-absolute mt-3 rounded-4 bg-secondary top-100 end-0"
						style={{
							zIndex: 1010,
						}}
					>
						<div className="d-flex align-items-stretch flex-column  rounded-4">
							<Link to="/edit-profile">
								<button className="btn btn-secondary py-2 px-3">
									<BsPencilSquare color="white" />
									<span className="ms-2">edit profile</span>
								</button>
							</Link>
							<button
								className="btn btn-danger text-start py-2 px-3"
								onClick={logout}
							>
								<BsBoxArrowRight color="white" />
								<span className="ms-2">logout</span>
							</button>
						</div>
					</div>
				)}

				{/* buttons */}
				<div className="btn-group">
					<Link to={`/profile/${user.uid}`}>
						<button className="btn text-truncate d-flex align-items-center flex-nowrap">
							{user ? (
								<RoundedImg src={user.profileImage} size="2rem" />
							) : (
								<BsPeopleCircle size="2rem" color="white" />
							)}
							{user && (
								<span className="ms-2 text-white fs-6 text-nowrap">
									{user.username.substr(0, 8)}...
								</span>
							)}
						</button>
					</Link>
					<button className="btn" ref={largeScreenMenuToggle}>
						<BsThreeDotsVertical size="1.8rem" color="white" />
					</button>
				</div>
			</div>
		</>
	)
}

export default ({ user }) => {
	// breakpoints
	const sm = useMediaQuery('(min-width: 500px)')
	const md = useMediaQuery('(min-width: 600px)')

	// screen sizes
	const smallScreens = useMediaQuery('(min-width: 280px)')
	const largeScreens = useMediaQuery('(min-width: 800px)')

	return (
		<div className="row bg-dark align-items-center justify-content-center">
			<div className="col col-xl-10 co-xxl-8 bg-dark" style={{ maxWidth: 1400 }}>
				<div className="row justify-content-between align-items-center py-2">
					{largeScreens ? (
						<Laptop md={md} user={user} />
					) : smallScreens ? (
						<MobileAndTablet sm={sm} md={md} user={user} />
					) : null}
				</div>
			</div>
		</div>
	)
}
