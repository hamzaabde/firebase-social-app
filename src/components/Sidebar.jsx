import React from 'react'

// icons
import { BsHouseDoorFill, BsPeopleFill, BsPlusCircleFill } from 'react-icons/bs'

// router
import { Link } from 'react-router-dom'

const style = {
	fontSize: '.9rem',
	textDecoration: 'none',
}

export default () => {
	return (
		<div className="d-flex flex-column justify-content-center bg-white py-1 mt-2 border-top border-2 border-light">
			<div className="col d-flex align-items-center">
				<Link to="/" style={style}>
					<button className="btn py-2 d-flex flex-row align-items-center">
						<BsHouseDoorFill className="text-danger" size="2rem" />
						<span className="ms-3 fs-6 fw-bold text-danger">Feed</span>
					</button>
				</Link>
			</div>
			<div className="col d-flex align-items-center">
				<Link to="/create-post" style={style}>
					<button className="btn py-2 d-flex flex-row align-items-center">
						<BsPlusCircleFill className="text-danger" size="2rem" />
						<span className="ms-3 fs-6 fw-bold text-danger">Create post</span>
					</button>
				</Link>
			</div>
			<div className="col d-flex align-items-center">
				<Link to="/friends" style={style}>
					<button className="btn py-2 d-flex flex-row align-items-center">
						<BsPeopleFill className="text-danger" size="2rem" />
						<span className="ms-3 fs-6 fw-bold text-danger">Friends</span>
					</button>
				</Link>
			</div>
		</div>
	)
}
