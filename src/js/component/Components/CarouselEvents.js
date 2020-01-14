import React from "react";

export class CarouselEvents extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div
						id="carouselExampleFade"
						className="carousel slide carousel-fade"
						data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191128-WA0015.jpg?alt=media&token=b71e476a-562a-4803-8a81-90edd942e4ab"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							{/*<div className="carousel-item">
								<img
									src="https://placekitten.com/1600/900"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://placekitten.com/1600/900"
									className="d-block w-100"
									alt="..."
								/>
                            </div>*/}
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
