import React from "react";
import { Link, NavLink } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark">
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
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link" href="/">
								Home
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Services
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="/hair">
									Hair
								</a>
								<a className="dropdown-item" href="/nails">
									Nails
								</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/gallery">
								Events
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
			// <NavLink className="dropdown-item" href="#">
			//   Spa
			// </NavLink>*/}

			// <a  target="#" href="https://www.facebook.com/sparklesalonboutique/">
			//  <i className="social-icon fab fa-facebook" />
			// </a>
			// <a target="#" href="https://www.instagram.com/sparklesalonboutique/">
			//  <i className="social-icon fab fa-instagram" />
			// </a>
		);
	}
}
