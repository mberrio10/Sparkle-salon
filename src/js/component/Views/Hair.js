import React from "react";
import { Navbar } from "../Components/Navbar";
import { Jumbotron } from "../Components/Jumbotron";
import { CarouselHair } from "../Components/CarouselHair";
import { MenuHairPrices } from "../Components/MenuHairPrices";
import { Link, NavLink } from "react-router-dom";

export class Hair extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Jumbotron />
				<div className="main page-elevate">
					<h2 className="title">Hair</h2>
					<CarouselHair />
					<div className="container text-center">
						<div className="row hairLegend">
							<div className="col-md-12 ml-auto mr-auto">
								<h4 className="text-left description">
									Our creative team of professionals are
									highly trained and experienced, they are
									dedicated to provide you with the latest
									techniques and trends to suit your needs.
									Sparkle Salon is dedicated to providing each
									of our guests with a gratifying experience
									every time they visit.
								</h4>
							</div>
						</div>
						<MenuHairPrices />
					</div>
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
