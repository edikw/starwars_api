import React, {Component} from 'react';
import '../App.scss';
import Logo from '../assets/logo.png';
import Bar from '../assets/menu (1).png'
import {Link, withRouter} from "react-router-dom";

class Navbar extends Component {
	linkPage (url) {
		this.props.history.push({
			"pathname": "/details/" + url
		});
	}
	render () {
		return (
			<nav className="navbar navbar-expand-lg navbar_zindex">
				<Link to={"/"}>
					<img src={Logo} className="img_logo" alt="" />
				</Link>
					<button className="navbar-toggler button_navbar" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<img src={Bar} className="icon_navbar" alt="" />
					</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<h4 className="nav-link" onClick={() => this.linkPage('people')}>
								People
								<span className="sr-only">(current)</span>
							</h4>
						</li>
						<li className="nav-item">
							<h4 className="nav-link" onClick={() => this.linkPage('starships')}>Starships</h4>
						</li>
						<li className="nav-item">
							<h4 to={'/'} className="nav-link" onClick={() => this.linkPage('species')}>Species</h4>
						</li>
						<li className="nav-item">
							<h4 className="nav-link" tabIndex="-1" aria-disabled="true" onClick={() => this.linkPage('vehicles')}>Vehicles</h4>
						</li>
						<li className="nav-item">
							<h4 className="nav-link" tabIndex="-1" aria-disabled="true" onClick={() => this.linkPage('planets')}>Planets</h4>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default withRouter(Navbar);