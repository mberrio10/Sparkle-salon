import React from "react";
import { MapComponent } from "../Components/MapComponent";

export class SalonContactInfo extends React.Component {
	render() {
		return (
			<div className="row text-center">
				<div className="col-md-6 align-self-center">
					<div className="name">
						<h3>Chevy Chase Plaza</h3>
					</div>
					<p>
						<span className="street">10912 Wiles Rd</span>
						<br />
						<span className="city">Coral Springs</span>,
						<span className="State"> FL</span>
						<span className="postalCode"> 33076</span>
						<br />
						<br />
						<span className="telephone">
							<a href="tel:+19542455619">954.245.5619</a>
						</span>
					</p>
					<p>
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
					</p>
					<p>&nbsp;</p>
					<h4>Hours</h4>
					<table className="table table-borderless SalonHrs">
						<tbody>
							<tr>
								<td>Monday</td>
								<td>Closed</td>
							</tr>
							<tr>
								<td>Tues, Wed, Thurs</td>
								<td>9:00am – 6:00pm</td>
							</tr>
							<tr>
								<td>Friday</td>
								<td>9:00am – 6:00pm</td>
							</tr>
							<tr>
								<td>Saturday</td>
								<td>9:00am – 5:00pm</td>
							</tr>
							<tr>
								<td>Sunday</td>
								<td>Closed</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="col-md-6 align-self-center">
					<MapComponent />
				</div>
			</div>
		);
	}
}
