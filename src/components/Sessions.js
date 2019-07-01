import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import '../App.scss';

class Session extends Component {

	linkPage (data) {
		let url = data.url
		let filtered = url.replace(/^\D+/g, '')
		this.props.history.push({
			"pathname" : "/detail-films/" + filtered, 
			"search": "?episode=" + data.episode_id, 
			hash: ""
		});
	}

	render () {
		return (
			<div className="session">
				<div className=" col-12 col-md-10 col-lg-10 mx-auto">
					<div className="row">
					{this.props.films.map((film, i) => {
						return (
							<div className="col-12 col-md-5 col-lg-4 mb-4 mx-auto" key={i}>
								<div className="card text-center p-5 session_card" onClick={() => this.linkPage(film)}>
									<h5 className="title_session">{film.title}</h5>
									<h6 className="title_session">episode : {film.episode_id}</h6>
									<h6 className="title_session">Release : {film.release_date}</h6>
								</div>
							</div>
						)
					})}
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Session);