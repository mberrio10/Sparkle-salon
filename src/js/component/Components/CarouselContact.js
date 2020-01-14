import React from "react";

export class CarouselContact extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div
						id="carouselExampleFade"
						className="carousel slide carousel-fade"
						data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191128-WA0011.jpg?alt=media&token=ec38429c-c31b-4977-a1e9-dc71612f622a"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191128-WA0012.jpg?alt=media&token=36f17dc2-f4aa-4bac-bfa9-af41833aaad6"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191128-WA0013.jpg?alt=media&token=878df762-899a-4464-ab93-19d04462e706"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191128-WA0014.jpg?alt=media&token=ba04f2b7-7903-47fe-b818-57e04c03be9e"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191128-WA0015.jpg?alt=media&token=b71e476a-562a-4803-8a81-90edd942e4ab"
									className="d-block w-100"
									alt="..."
								/>
							</div>
						</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleFade"
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
							href="#carouselExampleFade"
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
