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
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200127-WA0003.jpg?alt=media&token=7eae2df7-92a7-4852-ac01-7a4520e534a5"
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
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200115-WA0000.jpg?alt=media&token=b365c1d9-e5fc-4669-ba02-2ee6a3ccbeae"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191128-WA0006.jpg?alt=media&token=4e87a598-68a5-40bf-9344-e68181f028fa"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20191128-WA0002.jpg?alt=media&token=c411d407-e745-448b-9a23-bf98187359a1"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200115-WA0001.jpg?alt=media&token=a6e308d9-e603-4c15-90c0-8e54a43c1ec0"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200127-WA0000.jpg?alt=media&token=f0ff2d1f-2133-4db9-b6b3-c4199fe14c57"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200127-WA0002.jpg?alt=media&token=b4bb54d5-0503-49db-8a40-da0c60406e58"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200115-WA0003.jpg?alt=media&token=6a609ca5-fe88-466d-a2b8-e7a6549dd8fe"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200115-WA0004.jpg?alt=media&token=bc191cef-0253-49b1-a10c-a99fd0ae117f"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200127-WA0004.jpg?alt=media&token=c7aa3c8f-887c-47dd-ba1c-c6c55138d335"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200115-WA0006.jpg?alt=media&token=99c8cf9c-7214-4b91-8f5f-9549c1f4baba"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200127-WA0005.jpg?alt=media&token=72d7c14d-f8af-4c7f-8a76-6e1725381529"
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
