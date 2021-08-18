import React from 'react'

// icons
import { BsHouseDoorFill, BsPeopleFill, BsPlusCircleFill } from 'react-icons/bs'

const style = {
	fontSize: '.9rem',
}

export default () => {
	return (
		<div className="row align-items-center justify-content-center bg-white py-1 border-top border-2 border-light">
			<div className="col d-flex justify-content-center">
				<button className="btn d-flex flex-column align-items-center">
					<BsHouseDoorFill className="text-danger" size="1.2rem" />
					<span className="fw-bold text-danger" style={style}>
						Feed
					</span>
				</button>
			</div>
			<div className="col-auto d-flex justify-content-center">
				<button className="btn d-flex flex-column align-items-center">
					<BsPlusCircleFill className="text-danger" size="1.2rem" />
					<span className="fw-bold text-danger" style={style}>
						Create post
					</span>
				</button>
			</div>
			<div className="col d-flex justify-content-center">
				<button className="btn d-flex flex-column align-items-center">
					<BsPeopleFill className="text-danger" size="1.2rem" />
					<span className="fw-bold text-danger" style={style}>
						Friends
					</span>
				</button>
			</div>
		</div>
	)
}
