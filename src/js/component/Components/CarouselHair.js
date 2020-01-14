import React from "react";

export class CarouselHair extends React.Component {
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
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191128-WA0004.jpg?alt=media&token=7d9b39ab-e767-4185-a1f2-ee1f6859fba1"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191128-WA0003.jpg?alt=media&token=2cf6a164-5566-4245-9a9d-f8be11994fc7"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191128-WA0007.jpg?alt=media&token=3f760b6c-05a5-4e26-9ede-011492585ca5"
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
