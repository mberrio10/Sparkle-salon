import React from "react";
import { TeamCard } from "./TeamCard";

export class TeamSection extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="section text-center">
				<h2 className="title">Here is our team</h2>
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="team-player">
								<TeamCard
									team={{
										imageUrl:
											"https://placekitten.com/400/400",
										name: "Gigi Hadid",
										ocupation: "Model",
										description:
											"You can write here details about one of your team members. You can give more details about what they do Feel free to add some links for people to be able to follow them outside the site.",
										twitter: "https://twitter.com/",
										instagram: "https://www.instagram.com/",
										facebook: "https://www.facebook.com/"
									}}
								/>
							</div>
						</div>
						<div className="col-md-4">
							<div className="team-player">
								<TeamCard
									team={{
										imageUrl:
											"https://placekitten.com/400/400",
										name: "Christian Louboutin",
										ocupation: "Designer",
										description:
											"You can write here details about one of your team members. You can give more details about what they do Feel free to add some links for people to be able to follow them outside the site.",
										twitter: "https://twitter.com/",
										instagram: "https://www.instagram.com/",
										facebook: "https://www.facebook.com/"
									}}
								/>
							</div>
						</div>
						<div className="col-md-4">
							<div className="team-player">
								<TeamCard
									team={{
										imageUrl:
											"https://placekitten.com/400/400",
										name: "Kendall Jenner",
										ocupation: "Trainer",
										description:
											"You can write here details about one of your team members. You can give more details about what they do Feel free to add some links for people to be able to follow them outside the site.",
										twitter: "https://twitter.com/",
										instagram: "https://www.instagram.com/",
										facebook: "https://www.facebook.com/"
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
