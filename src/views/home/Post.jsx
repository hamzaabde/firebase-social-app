import React from 'react'

// icons
import { BsHeart } from 'react-icons/bs'

// components
import { RoundedImg } from '@components/containers'

export default ({ post }) => {
	return (
		<div className="card mb-4" style={{ maxWidth: 550 }}>
			<div className="card-header bg-white">
				<div className="d-flex flex-row align-items-center">
					<RoundedImg src={post.authorImage} size="2rem" />
					<h3 className="ms-2 fs-5 fw-bold mb-0">{post.authorName}</h3>
				</div>
			</div>
			<div className="card-body overflow-hidden" style={{ maxHeight: 400 }}>
				<p
					className="overflow-hidden"
					style={{
						lineHeight: '1.2rem',
						height: '6rem',
					}}
				>
					{post.body}
				</p>
				<div className="row gap-1 mx-0">
					<div className="col p-0">
						<img src={post.image} className="img-fluid" />
					</div>
				</div>
			</div>
			<div className="card-footer bg-white">
				{/* post actions */}
				<div className="d-flex flex-row">
					<div className="d-flex flex-column align-items-center">
						<BsHeart className="text-danger" size="1.5rem" />
						<span className="mt-1 fs-6 fw-bold text-danger">Like</span>
					</div>
				</div>
			</div>
		</div>
	)
}
