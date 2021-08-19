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
		<div className="row align-items-center justify-content-center bg-white py-1 border-top border-2 border-light">
			<div className="col d-flex justify-content-center">
				<Link to="/" style={style}>
					<button className="btn px-0 d-flex flex-column align-items-center">
						<BsHouseDoorFill className="text-danger" size="2rem" />
						<span className="fw-bold text-danger" style={style}>
							Feed
						</span>
					</button>
				</Link>
			</div>
			<div className="col-auto d-flex justify-content-center">
				<Link to="/create-post" style={style}>
					<button className="btn px-0 d-flex flex-column align-items-center">
						<BsPlusCircleFill className="text-danger" size="2rem" />
						<span className="fw-bold text-danger" style={style}>
							Create post
						</span>
					</button>
				</Link>
			</div>
			<div className="col d-flex justify-content-center">
				<Link to="/friends" style={style}>
					<button className="btn px-0 d-flex flex-column align-items-center">
						<BsPeopleFill className="text-danger" size="2rem" />
						<span className="fw-bold text-danger" style={style}>
							Friends
						</span>
					</button>
				</Link>
			</div>
		</div>
	)
}
