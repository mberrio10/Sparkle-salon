import React from "react";

export class Hiring extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			message: ""
		};
	}

	handleNameChange = event => {
		this.setState({
			name: event.target.value
		});
	};

	handleEmailChange = event => {
		this.setState({
			email: event.target.value
		});
	};

	handleMessageChange = event => {
		this.setState({
			message: event.target.value
		});
	};

	handleSubmit(event) {
		alert("Your message has been sent");
		event.preventDefault();
	}

	render() {
		return (
			<div className="row">
				<div className="col-12">
					<div className="section section-contacts">
						<div className="row">
							<div className="col-md-8 ml-auto mr-auto">
								<h4 className="text-left description">
									Send us a message.
								</h4>
								<br />
								<h2 className="text-center hiring">
									Work with us
								</h2>
								<h4 className="text-left description">
									We are seeking highly qualified Nail
									Technicians that are able to perform gel
									manicures, pedicures, acrylic, SNS and dip
									powder. Feel free to apply in person! We
									look forward to meeting you!.
									<br />
									<br />
									<span>
										We have a room available for rent
										(Available for facial, waxing or
										massage).
									</span>
								</h4>
								<form
									className="contact-form"
									onSubmit={this.handleSubmit}>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group bmd-form-group">
												<label className="bmd-label-floating">
													Your Name
												</label>
												<input
													type="text"
													className="form-control"
													value={this.state.name}
													onChange={
														this.handleNameChange
													}
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group bmd-form-group">
												<label className="bmd-label-floating">
													Your Email
												</label>
												<input
													type="email"
													className="form-control"
													value={this.state.email}
													onChange={
														this.handleEmailChange
													}
												/>
											</div>
										</div>
									</div>
									<div className="form-group bmd-form-group">
										<label
											htmlFor="exampleMessage"
											className="bmd-label-floating">
											Your Message
										</label>
										<textarea
											type="email"
											className="form-control"
											rows="4"
											id="exampleMessage"
											value={this.state.message}
											onChange={this.handleMessageChange}
										/>
									</div>
									<div className="row">
										<div className="col-md-4 ml-auto mr-auto text-center">
											<button className="btn btn-warning btn-raised">
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
