import React, {Component} from 'react';
import axios from 'axios';
import '../App.scss';

class Planets extends Component {
	constructor () {
		super ()
		this.state = {
			count: 0,
			planets: []

		}
	}

	componentDidMount () {
		this.getPlanets();
	}

	getPlanets() {
		let data = [];
		axios.get(this.props.planets[this.state.count]).then(res => {
			if(res.status === 200){
				data.push(res.data);
				this.setState({planets: data});
			}
		});
	}

	next () {
		this.state.count++
		this.getPlanets();
	}

	previous () {
		this.state.count--
		this.getPlanets();
	}
	render () {
		return (
			<div>
				<div>
					{this.state.planets.map((planet, i) => {
						return (
							<div key={i}>
								<div>
									<h6>Name : {planet.name}</h6>
									<h6>Diameter : {planet.diameter}</h6>
									<h6>Gravity : {planet.gravity}</h6>
									<h6>Orbital : {planet.orbital_period}</h6>
									<h6>Population : {planet.population}</h6>
									<h6>Rotation : {planet.rotation_period}</h6>
									<h6>Water : {planet.surface_water}</h6>
									<h6>Terrain : {planet.terrain}</h6>
									<h6>Climate : {planet.climate}</h6>
								</div>
								<div className="text-right text-lg-left">
									{this.state.count > 0 ?
										<span className="arrow" onClick={() => this.previous()}>&#8592;</span>
										: null
									}
									<span className="arrow" onClick={() => this.next()}>&#8594;</span>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default Planets;