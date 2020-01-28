import React from "react";
import { Navbar } from "../Components/Navbar";
import { Jumbotron } from "../Components/Jumbotron";
import { CarouselContact } from "../Components/CarouselContact";
import { SalonContactInfo } from "../Components/SalonContactInfo";
import { Hiring } from "../Components/Hiring";
import { Link, NavLink } from "react-router-dom";

export class Contact extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Jumbotron />
				<div className="main page-elevate">
					<h2 className="TitleContact">Contact</h2>
					<CarouselContact />
					<SalonContactInfo />
					<div className="container-fluid">
						<div className="row d-block">
							<Link to="/gallery">
								<img
									src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/Sparkle%20Banner%20(1).png?alt=media&token=59241f9c-f051-4764-b5ad-3d4e89eb9c64"
									className="mx-auto d-block img-fluid"
									alt="Responsive image"
								/>
							</Link>
						</div>
					</div>
					<div className="container-fluid">
						<Hiring />
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
					</div>
				</footer>
			</React.Fragment>
		);
	}
}
