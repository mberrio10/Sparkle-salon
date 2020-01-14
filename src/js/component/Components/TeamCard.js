import React from "react";
import PropTypes from "prop-types";

export class TeamCard extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="card card-plain">
				<div className="col-md-6 ml-auto mr-auto">
					<img
						src={this.props.team.imageUrl}
						alt="Thumbnail Image"
						className="img-raised rounded-circle img-fluid"
					/>
				</div>
				<h4 className="card-title">
					{this.props.team.name}
					<br />
					<small className="card-description text-muted">
						{this.props.team.ocupation}
					</small>
				</h4>
				<div className="card-body">
					<p className="card-description">
						{this.props.team.description}
					</p>
				</div>
				<div className="card-footer justify-content-center">
					<a
						href={this.props.team.twitter}
						className="btn btn-link btn-just-icon">
						<i className="fa fa-twitter" />
					</a>
					<a
						href={this.props.team.instagram}
						className="btn btn-link btn-just-icon">
						<i className="fa fa-instagram" />
					</a>
					<a
						href={this.props.team.facebook}
						className="btn btn-link btn-just-icon">
						<i className="fa fa-facebook-square" />
					</a>
				</div>
			</div>
		);
	}
}

TeamCard.propTypes = {
	team: PropTypes.object
};
