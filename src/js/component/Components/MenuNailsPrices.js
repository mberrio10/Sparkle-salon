import React from "react";

export class MenuNailsPrices extends React.Component {
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
								<td>Manicure Regular</td>
								<td />
								<td>$15</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Manicure/Pedicure</td>
								<td />
								<td>$35</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Manicure Gel</td>
								<td />
								<td>$25</td>
							</tr>
							<tr>
								<th scope="row">4</th>
								<td>Manicure Gel French</td>
								<td />
								<td>$30</td>
							</tr>
							<tr>
								<th scope="row">5</th>
								<td>Manicure Dip Powder</td>
								<td />
								<td>$35</td>
							</tr>
							<tr>
								<th scope="row">6</th>
								<td>Pedicure Regular</td>
								<td />
								<td>$25</td>
							</tr>
							<tr>
								<th scope="row">7</th>
								<td>Pedi Spa</td>
								<td />
								<td>$40</td>
							</tr>
							<tr>
								<th scope="row">8</th>
								<td>Pedicure Deluxe</td>
								<td />
								<td>$50</td>
							</tr>
							<tr>
								<th scope="row">9</th>
								<td>Pedicure Polish Change</td>
								<td />
								<td>$15</td>
							</tr>
							<tr>
								<th scope="row">10</th>
								<td>Paraffin</td>
								<td />
								<td>$10</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
