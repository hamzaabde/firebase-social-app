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
					<RoundedImg src="#" size="2rem" />
					<h3 className="ms-2 fs-5 fw-bold mb-0">Username</h3>
				</div>
			</div>
			<div className="card-body overflow-hidden" style={{ maxHeight: 400 }}>
				<p
					className="h-100 text-truncate"
					style={{
						height: 150,
						maxHeight: 200,
					}}
				>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
					blanditiis magnam ratione ipsa ut qui vitae optio, aliquam maiores
					nostrum reprehenderit facere porro dolor distinctio nisi in pariatur
					non maxime impedit sequi modi? Quae cumque error officia vel maxime
					labore, voluptas magnam quibusdam fuga deleniti exercitationem
					corrupti accusamus ad dicta nam dolores! Assumenda voluptates esse
					eligendi quos, fuga labore consequatur at tempora ipsum perferendis
					perspiciatis dolor, ipsam ut, quaerat amet nesciunt nulla. Officiis
					mollitia illum dolore delectus aut fugit id quia, quasi aperiam fugiat
					quas adipisci asperiores ad. Vel eum ea eius animi voluptate quaerat!
					Optio ratione provident sunt velit!
				</p>
				<div className="row gap-1 mx-0">
					<div className="col p-0">
						<img
							src="https://cdn.pixabay.com/photo/2015/06/08/15/11/typewriter-801921_960_720.jpg"
							className="img-fluid"
						/>
					</div>
					<div className="col p-0">
						<img
							src="https://cdn.pixabay.com/photo/2015/06/08/15/11/typewriter-801921_960_720.jpg"
							className="img-fluid"
						/>
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
