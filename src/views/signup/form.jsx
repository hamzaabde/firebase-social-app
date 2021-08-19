import React, { useState, useEffect } from 'react'

// helpers
import { getSrcFromFile } from '@helpers/src'

// hooks
import useCurrentUser from '@hooks/useCurrentUser'

// firebase
import { signup } from '@firebase/auth'

// router
import { Redirect, Link } from 'react-router-dom'

// icons
import { BsPlusCircleFill } from 'react-icons/bs'

// components
import { RoundedImg } from '@components/containers'
import DelayRedirect from '@components/DelayRedirect'

export default () => {
	const { user, error } = useCurrentUser()

	const [image, setImage] = useState(null)
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [loading, setLoading] = useState(false)
	const [alert, setAlert] = useState(null)
	const [redirect, setRedirect] = useState(false)
	const [logedIn, setLogedIn] = useState(false)

	const submit = e => {
		e.preventDefault()

		if (loading) return

		setLoading(true)
		setAlert(null)

		if (!image) {
			setLoading(false)
			return setAlert('please select an image')
		}

		signup(email, password, username, image)
			.then(_ => {
				console.log('user created succesfully')
				setLoading(false)
				setAlert(null)
				setLogedIn(true)
			})
			.catch(error => {
				setLoading(false)
				setAlert(error.message)
			})
	}

	if (user && !redirect) {
		setRedirect(true)
		setAlert('You are already signed in, please signout first')
	}

	// redirect when loged in
	if (logedIn) return <Redirect to="/" />

	return (
		<div className="d-flex justify-content-around align-items-center flex-grow-1 w-100 h-100">
			<div className="card w-100" style={{ maxWidth: 350 }}>
				<div className="card-header">
					<h1 className="text-center fs-4">Create your account</h1>
				</div>

				<div className="card-body">
					{user && <DelayRedirect push={true} to="/" delay={3000} />}
					{user === undefined ? (
						<div className="text-center">
							<div className="spinner-border text-center text-dark"></div>
						</div>
					) : null}
					{alert && (
						<div
							className={`alert-${
								user === null ? 'danger' : 'success'
							} p-1 border border-${user === null ? 'danger' : 'success'}`}
						>
							<p className="text-center mb-0">{alert}</p>
						</div>
					)}
					{/* upload img */}
					<form className="form" onSubmit={submit}>
						<div className="form-group">
							<div className="d-flex align-items-start flex-column mb-2">
								<label htmlFor="image" className="form-label">
									Select profile image
								</label>
								{image ? (
									<label htmlFor="image">
										<RoundedImg src={getSrcFromFile(image)} />
									</label>
								) : (
									<label htmlFor="image">
										<BsPlusCircleFill size="2rem" />
									</label>
								)}
							</div>

							<input
								type="file"
								id="image"
								className="d-none"
								name="image"
								disabled={user === undefined}
								onChange={e => {
									const img = e.target.files[0]
									const types = ['image/png', 'image/jpg', 'image/jpeg']

									if (img) {
										if (types.includes(img.type)) {
											setAlert(null)
											setImage(img)
										} else {
											setAlert('please select an image')
											setImage(null)
										}
									} else {
										setImage(null)
									}
								}}
							/>
						</div>

						{/* enter username */}
						<div className="form-group">
							<label htmlFor="username" className="form-label">
								Enter username
							</label>
							<input
								type="text"
								id="username"
								className="form-control"
								name="name"
								disabled={user === undefined}
								autoComplete="name"
								value={username}
								onChange={e => {
									setUsername(e.target.value)
								}}
							/>
						</div>

						{/* enter email */}
						<div className="form-group">
							<label htmlFor="email" className="form-label">
								Enter email
							</label>
							<input
								type="email"
								id="email"
								className="form-control"
								autoComplete="email"
								disabled={user === undefined}
								value={email}
								onChange={e => {
									setEmail(e.target.value)
								}}
							/>
						</div>

						{/* enter password */}
						<div className="form-group">
							<label htmlFor="password" className="form-label">
								Enter password
							</label>
							<input
								type="password"
								id="password"
								className="form-control"
								name="password"
								disabled={user === undefined}
								autoComplete="new-password"
								value={password}
								onChange={e => {
									setPassword(e.target.value)
								}}
							/>
						</div>

						{/* submit btn */}
						<button
							className="btn btn-primary px-3 mt-2"
							disabled={user === undefined}
							type="submit"
						>
							{loading && (
								<span
									className="spinner-border"
									style={{ width: '1rem', height: '1rem' }}
								></span>
							)}
							<span className={loading ? `ms-2` : null}>
								Create account
							</span>
						</button>
					</form>
				</div>
				<div className="card-footer">
					<p className="mb-0 text-center">
						Already a have an account? <Link to="/login">Login</Link> instead.
					</p>
				</div>
			</div>
		</div>
	)
}
