import React from "react";
import { Link, NavLink } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<nav
						className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
						id="scrollNav">
						<div className="container">
							<a className="navbar-brand" href="index.js">
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
									<Link
										className="nav-item nav-link active"
										to="/">
										Home
										<span className="sr-only">
											(current)
										</span>
									</Link>
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
											<NavLink
												className="dropdown-item"
												to="/hair">
												Hair
											</NavLink>
											<NavLink
												className="dropdown-item"
												to="/nails">
												Nails
											</NavLink>
											{/*<NavLink
												className="dropdown-item"
												href="#">
												Spa
                                            </NavLink>*/}
										</div>
									</li>
									<NavLink
										className="nav-item nav-link"
										to="/gallery">
										Events
									</NavLink>
									<NavLink
										className="nav-item nav-link"
										to="/contact">
										Contact Us
									</NavLink>
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
				</div>
			</div>
		);
	}
}
