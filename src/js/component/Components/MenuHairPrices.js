import React from "react";

export class MenuHairPrices extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<table className="table table-borderless table-hover table-dark">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Services</th>
								<th scope="col" />
								<th scope="col">Price</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Womens hair cut</td>
								<td />
								<td>$35</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Mens hair cut</td>
								<td />
								<td>$25</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Blow dry</td>
								<td />
								<td>$30+</td>
							</tr>
							<tr>
								<th scope="row">4</th>
								<td>Hair cut and Blow dry</td>
								<td />
								<td>$55+</td>
							</tr>
							<tr>
								<th scope="row">5</th>
								<td>Sinlge Process</td>
								<td />
								<td>$60+</td>
							</tr>
							<tr>
								<th scope="row">6</th>
								<td>Gloss</td>
								<td />
								<td>$30+</td>
							</tr>
							<tr>
								<th scope="row">7</th>
								<td>Partial Hi-Lights</td>
								<td />
								<td>$75+</td>
							</tr>
							<tr>
								<th scope="row">8</th>
								<td>Full Hi-Lights</td>
								<td />
								<td>$125+</td>
							</tr>
							<tr>
								<th scope="row">9</th>
								<td>Brazilian Blowout Treatment</td>
								<td />
								<td>$120+</td>
							</tr>
							<tr>
								<th scope="row">10</th>
								<td>Deep Conditioner Treatment</td>
								<td />
								<td>$25+</td>
							</tr>
							<tr>
								<th scope="row">11</th>
								<td>Color Correction</td>
								<td />
								<td>By Consultation</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
