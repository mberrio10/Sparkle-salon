import React from "react";

export class CarouselNails extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div
						id="carouselExampleIndicators"
						className="carousel slide"
						data-ride="carousel">
						<ol className="carousel-indicators">
							<li
								data-target="#carouselExampleIndicators"
								data-slide-to="0"
								className="active"
							/>
							<li
								data-target="#carouselExampleIndicators"
								data-slide-to="1"
							/>
							<li
								data-target="#carouselExampleIndicators"
								data-slide-to="2"
							/>
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191128-WA0008.jpg?alt=media&token=cda1e634-bc3b-4b6e-9962-a95fde497a1a"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191130-WA0004.jpg?alt=media&token=4c11ccc7-d3eb-4a10-af0d-2186ce13cf1f"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191223-WA0001.jpg?alt=media&token=0189dcfb-1a68-4b8b-b00d-51f95ea4f119"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200103-WA0000.jpg?alt=media&token=2213a173-576e-44d7-b12d-acbbfb2cdef9"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200104-WA0001%20(2).jpg?alt=media&token=e30fa326-811d-4076-b088-798b60a2f57f"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200104-WA0004.jpg?alt=media&token=6879555d-00bf-471a-b0c3-18d02ffe1d4b"
									className="d-block w-100"
									alt="..."
								/>
							</div>
						</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="prev">
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							/>
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="next">
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							/>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
