import React from "react";
import { Navbar } from "../Components/Navbar";
import { Jumbotron } from "../Components/Jumbotron";
import { CarouselEvents } from "../Components/CarouselEvents";
import { ServiceCardEvents } from "../Components/ServiceCardEvents";
import { Link, NavLink } from "react-router-dom";

export class Gallery extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Jumbotron />
				<div className="main page-elevate">
					<h2 className="titleEvent">Don`t Miss Our Best Events</h2>
					<CarouselEvents />
					<ServiceCardEvents />
					<div className="container-fluid">
						<div className="row d-block">
							<Link to="/contact">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/Sparkle%20Banner.png?alt=media&token=970cef15-10c4-49c6-bfb7-42efa87f2e78"
									className="mx-auto d-block img-fluid"
									alt="Responsive image"
								/>
							</Link>
						</div>
					</div>
				</div>
				<footer className="mastfoot mt-auto text-center">
					<div className="inner">
						<p className="footerStyle">
							© 2019 Sparkle Salon Boutique, Website created by
							<a href="www.linkedin.com/in/mikeberrio">
								{" "}
								Groovy Webs
							</a>
							.
						</p>
						<p className="footerStyle">
							Women photos Designed by
							<a href="https://www.freepik.com/racool-studio">
								{" "}
								Racool_studio
							</a>{" "}
							|
							<a href="https://www.freepik.com/nensuria">
								{" "}
								nensuria
							</a>
						</p>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}
