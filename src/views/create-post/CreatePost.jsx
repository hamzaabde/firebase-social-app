import React, { useState, useEffect } from 'react'

// icons
import { BsImage } from 'react-icons/bs'

// firebase
import { uploadPost } from '@fb/posts'

// helpers
import { getSrcFromFile } from '@helpers/src'

// hooks
import useMediaQuery from '@hooks/useMediaQuery'
import useCurrentUser from '@hooks/useCurrentUser'

// components
import Bottombar from '@components/Bottombar'
import Sidebar from '@components/Sidebar'

const Form = ({ user }) => {
	const [postBody, setPostBody] = useState('')
	const [postImage, setPostImage] = useState(null)

	// upload state
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const submit = e => {
		e.preventDefault()

		if (loading) return

		setLoading(true)
		setError(null)

		uploadPost(postBody, postImage, user)
			.then(() => {
				console.log('successfull')
				setPostBody('')
				setPostImage(null)

				setLoading(false)
				setError(null)
			})
			.catch(e => {
				setError(e.message)
				setLoading(false)
			})
	}

	return (
		<div>
			<div className="row align-items-center py-2">
				<div className="card">
					<div className="card-header">
						<h2 className="fs-5 mb-0 text-center">Write a post</h2>
					</div>
					<div className="card-body">
						<form className="form" onSubmit={submit}>
							<div className="form-group my-2">
								<label htmlFor="postBody" className="form-label">
									What is in your mind
								</label>
								<textarea
									name="post"
									id="postBody"
									className="form-control"
									autoComplete="off"
									required
									style={{
										lineHeight: '1.2rem',
										minHeight: '9rem',
										maxHeight: '12rem',
									}}
									value={postBody}
									onChange={e => setPostBody(e.target.value)}
								></textarea>
							</div>
							<div className="form-group my-2">
								<label htmlFor="postImages" className="form-label">
									Add images to post
								</label>
								<div>
									<label htmlFor="postImages">
										<BsImage className="text-danger" size="3rem" />
									</label>
									<input
										name="image"
										type="file"
										id="postImages"
										className="d-none"
										required
										onChange={e => {
											const img = e.target.files[0]

											console.log(img)

											const types = [
												'image/png',
												'image/jpeg',
												'image/jpg',
												'image/gif',
											]

											if (img)
												if (img && types.includes(img.type)) {
													setPostImage(img)
												} else {
													setPostImage(null)
												}
											else setPostImage(null)
										}}
									/>
								</div>
							</div>

							{/* preview */}
							<div className="row">
								{postImage && (
									<div className="col-3">
										<img
											className="img-fluid"
											src={getSrcFromFile(postImage)}
										/>
									</div>
								)}
							</div>
							<button
								className="btn btn-primary d-flex align-items-center px-3 mt-2"
								type="submit"
							>
								{loading && (
									<div
										className="spinner-border text-white me-2"
										style={{ width: '1rem', height: '1rem' }}
									></div>
								)}
								<span>publish</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default () => {
	const { user, error } = useCurrentUser()

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
									<Form user={user} />
								</div>
							</div>
						</div>
					) : smallScreens ? (
						<>
							<div className="flex-grow-1 bg-white overflow-hidden p-0">
								<Form user={user} />
							</div>
							<Bottombar />
						</>
					) : null}
				</div>
			</div>
		</div>
	)
}
