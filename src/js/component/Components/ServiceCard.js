import React from "react";
import { Link, NavLink } from "react-router-dom";

export class ServiceCard extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row justify-content-md-center">
					<div className="col-md-auto">
						<div className="card-group">
							<div className="card">
								<div className="card-top">
									<img
										src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/3577.jpg?alt=media&token=4f758a50-969d-41a2-bab7-051a1a8e80c7"
										className="card-img-top"
										alt="..."
									/>
								</div>
								<div className="card-bottom">
									<div className="card-body text-center card-hair">
										<h5
											className="card-title"
											style={{ marginTop: 0 }}>
											Hair
										</h5>
										<p className="card-text">
											The experts stylists at Sparkle
											Salon will shape your look, from
											classic to modern, with a variety of
											luxurious hair services and
											products.
										</p>
										<Link
											to="/hair"
											className="btn btn-warning">
											Learn More
										</Link>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-top">
									<img
										src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/1940.jpg?alt=media&token=94c45e4b-8729-4eb4-aeff-655aaa10b903"
										className="card-img-top"
										alt="..."
									/>
								</div>
								<div className="card-bottom">
									<div className="card-body text-center card-nails">
										<h5
											className="card-title"
											style={{ marginTop: 0 }}>
											Nails
										</h5>
										<p className="card-text">
											Spoil yourself with our treatment
											which includes soak, cuticles care,
											hand massage, nail restyle, buff and
											polish
										</p>
										<Link
											to="/nails"
											className="btn btn-warning">
											Learn More
										</Link>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-top">
									<img
										src="https://firebasestorage.googleapis.com/v0/b/salonphotos-ce4a2.appspot.com/o/OF8MSD0.jpg?alt=media&token=bbc7a91b-8ef4-4e4f-8abc-03ff37812756"
										className="card-img-top"
										alt="..."
									/>
								</div>
								<div className="card-bottom">
									<div className="card-body text-center card-events">
										<h5
											className="card-title"
											style={{ marginTop: 0 }}>
											Latest Events
										</h5>
										<p className="card-text">
											Don`t miss out our lates events and
											promotions.
										</p>
										<Link
											to="/gallery"
											className="btn btn-warning">
											Learn More
										</Link>
									</div>
								</div>
							</div>
							{/*<div className="card">
                                <div className="card-top">
                                    <img
                                        src="https://placekitten.com/400/400"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                </div>
                                <div className="card-bottom">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">
                                            This is a wider card with supporting text below
                                            as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </p>
                                        <a href="#" className="btn btn-warning">
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>
                            </div>*/}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
