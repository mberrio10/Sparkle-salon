import React from "react";
import GoogleMapReact from "google-map-react";

export class MapComponent extends React.Component {
	render() {
		return (
			<div className="container">
				<div
					className="row justify-content-start"
					style={{ paddingBottom: 12 }}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14308.891157543241!2d-80.2718348!3d26.2868767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff292cb763ba6a13!2sSparkle%20Salon!5e0!3m2!1sen!2sus!4v1573933697361!5m2!1sen!2sus"
						width="600"
						height="450"
						frameBorder="0"
						style={{ border: 0 }}
						allowFullscreen=""
					/>
				</div>
			</div>
		);
	}
}
