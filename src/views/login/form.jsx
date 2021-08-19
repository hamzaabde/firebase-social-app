import React, { useState, useEffect } from 'react'

// firebase
import { login } from '@firebase/auth'

// hooks
import useCurrentUser from '@hooks/useCurrentUser'

// router
import { Redirect, Link } from 'react-router-dom'

// components
import DelayRedirect from '@components/DelayRedirect'

export default () => {
	// loged in user
	const { user, error } = useCurrentUser()

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

		login(email, password)
			.then(userCred => {
				if (userCred.user) {
					console.log(userCred)
					setLoading(false)
					setAlert(null)
					setLogedIn(true)
				}
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
					<h1 className="text-center fs-4">Login</h1>
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
					<form className="form" onSubmit={submit}>
						<div className="form-group">
							<label htmlFor="email" className="form-label">
								Enter email
							</label>
							<input
								type="email"
								id="email"
								className="form-control"
								disabled={user === undefined}
								value={email}
								onChange={e => {
									setEmail(e.target.value)
								}}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password" className="form-label">
								Enter password
							</label>
							<input
								type="password"
								id="password"
								className="form-control"
								disabled={user === undefined}
								value={password}
								onChange={e => {
									setPassword(e.target.value)
								}}
							/>
						</div>
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
							<span className={loading && `ms-2`}>login</span>
						</button>
					</form>
				</div>
				<div className="card-footer">
					<p className="mb-0 text-center">
						Don't have an account? <Link to="/signup">Signup</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
