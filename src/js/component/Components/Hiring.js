import React from "react";

const encode = data => {
	return Object.keys(data)
		.map(
			key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
		)
		.join("&");
};

export class Hiring extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			message: ""
		};
	}

	handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "aplication/x-www-form-urlencoded" },
			body: encode({ "contact-form": "contact", ...this.state })
		})
			.then(() => alert("Your message has been sent"))
			.catch(error => alert(error));

		e.preventDefault();
	};

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, message } = this.state;
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
									<input
										type="hidden"
										name="form-name"
										value="contact"
									/>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group bmd-form-group">
												<label className="bmd-label-floating">
													Your Name
												</label>
												<input
													type="text"
													className="form-control"
													name="name"
													value={name}
													onChange={this.handleChange}
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
													name="email"
													value={email}
													onChange={this.handleChange}
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
											className="form-control"
											rows="4"
											id="exampleMessage"
											name="message"
											value={message}
											onChange={this.handleChange}
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
