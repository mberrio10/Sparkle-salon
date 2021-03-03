import React from "react";
import { Navbar } from "../Components/Navbar";
import { AboutSection } from "../Components/AboutSection";
import { ServiceCard } from "../Components/ServiceCard";
import { Link, NavLink } from "react-router-dom";
//import { TeamSection } from "../Components/TeamSection";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<header className="header">
					<Navbar />
					<div className="text-box">
						<h1 className="heading-primary">
							<span className="heading-primary-main">
								Sparkle
							</span>
							<span className="heading-primary-Sub">
								Salon{" "}
								<a
									target="#"
									href="https://www.facebook.com/sparklesalonboutique/">
									<i className="social-icon fab fa-facebook" />
								</a>
								<a
									target="#"
									href="https://www.instagram.com/sparklesalonboutique/">
									<i className="social-icon fab fa-instagram" />
								</a>
							</span>
						</h1>
					</div>
				</header>
				<section className="about-section">
					<AboutSection />
				</section>
				<section className="service">
					<ServiceCard />
					<div className="row d-block">
						<Link to="/contact">
							<img
								src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/Sparkle%20Banner.png?alt=media&token=970cef15-10c4-49c6-bfb7-42efa87f2e78"
								className="mx-auto d-block img-fluid"
								alt="Responsive image"
							/>
						</Link>
					</div>
				</section>
				<footer className="mastfoot mt-auto text-center">
					<div className="inner">
						<p className="footerStyle">
							© 2019 Sparkle Salon Boutique, Website created by
							<a href="https://www.linkedin.com/in/mikeberrio">
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
							</a>{" "}
							|
							<a href="https://www.freepik.com/phduet"> phduet</a>
						</p>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}
