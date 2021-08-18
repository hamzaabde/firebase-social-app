import React from 'react'

// icons
import { BsHouseDoorFill, BsPeopleFill, BsPlusCircleFill } from 'react-icons/bs'

export default () => {
	return (
		<div className="d-flex flex-column justify-content-center bg-white py-1 mt-2 border-top border-2 border-light">
			<div className="col d-flex align-items-center">
				<button className="btn py-2 d-flex flex-row align-items-center">
					<BsHouseDoorFill className="text-danger" size="2rem" />
					<span className="ms-3 fs-6 fw-bold text-danger">Feed</span>
				</button>
			</div>
			<div className="col d-flex align-items-center">
				<button className="btn py-2 d-flex flex-row align-items-center">
					<BsPlusCircleFill className="text-danger" size="2rem" />
					<span className="ms-3 fs-6 fw-bold text-danger">Create post</span>
				</button>
			</div>
			<div className="col d-flex align-items-center">
				<button className="btn py-2 d-flex flex-row align-items-center">
					<BsPeopleFill className="text-danger" size="2rem" />
					<span className="ms-3 fs-6 fw-bold text-danger">Friends</span>
				</button>
			</div>
		</div>
	)
}
