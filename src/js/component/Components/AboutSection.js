import React from "react";

export class AboutSection extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="u-text-center u-margin-bottom-big">
					<h2 className="heading-secondary">Our Salon</h2>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12">images</div>
					<div className="col-lg-6 col-md-6 col-sm-12">
						<p className="paragraph">
							Located in Coral Springs, Sparkle Beauty Salon is
							committed to providing total beauty and satisfaction
							while creating a unique portrait of style for each
							individual. Our luxury hair case care salon is
							specialized in the art of outstanding hair, offering
							an exquisite range of innovative and elgant styles.
							Your hair is your best accessory: designed by us,
							worn beautifully by you!
						</p>
						<a href="#" className="btn-text">
							Contact Us &rarr;
						</a>
					</div>
				</div>
			</div>
		);
	}
}
