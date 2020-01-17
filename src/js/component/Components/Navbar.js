import React from "react";
import { Link, NavLink } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav
				className="navbar sticky-top navbar-expand-md navbar-dark bg-dark"
				id="scrollNav">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						<img
							src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/IMG-20200104-WA0012.jpg?alt=media&token=df6d75c5-a65d-445d-879c-22b4b132d206"
							className="img-fluid SalonLogo"
							alt="Responsive image"
						/>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavAltMarkup">
						{" "}
						<div className="navbar-nav">
							<a className="nav-item nav-link active" href="/">
								Home
								<span className="sr-only">(current)</span>
							</a>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									Services
								</a>
								<div
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink">
									<a className="dropdown-item" href="/hair">
										Hair
									</a>
									<a className="dropdown-item" href="/nails">
										Nails
									</a>
									{/*<NavLink
                                        className="dropdown-item"
                                        href="#">
                                        Spa
                                    </NavLink>*/}
								</div>
							</li>
							<a className="nav-item nav-link" href="/gallery">
								Events
							</a>
							<a className="nav-item nav-link" href="/contact">
								Contact Us
							</a>
							<a
								target="#"
								href="https://www.facebook.com/sparklesalonboutique/">
								<i className="fab fa-facebook" />
							</a>
							<a
								target="#"
								href="https://www.instagram.com/sparklesalonboutique/">
								<i className="fab fa-instagram" />
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
