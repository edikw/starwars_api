import React, {Component} from 'react';
import axios from 'axios';
import config from '../config';
import {withRouter} from 'react-router-dom';

class AllDetail extends Component {

	constructor () {
		super()
		this.state = {
			peoples: [],
			planets: [],
			species: [],
			starships: [],
			vehicles: [],
			next: '',
			previous: '',
			render: false

		}
	}

	componentDidMount () {
		if(this.props.url === 'people') {
			this.getDataPeople(config.base_url, this.props.url);
		}
		if(this.props.url === 'planets') {
			this.getDataPlanets(config.base_url, this.props.url);
		}
		if(this.props.url === 'vehicles') {
			this.getDataVehicles(config.base_url, this.props.url);
		}
		if(this.props.url === 'species') {
			this.getDataSpecies(config.base_url, this.props.url);
		}
		if(this.props.url === 'starships') {
			this.getDataStarships(config.base_url, this.props.url);
		}
	}

	getDataPeople (url, data) {
		if(data != null) {
			axios.get(url + data).then(res => {
				this.setState({
					peoples: res.data.results,
					next: res.data.next,
					previous: res.data.previous,
					render: true
				});
			});
		}else {
			axios.get(url).then(res => {
				this.setState({
					peoples: res.data.results,
					next: res.data.next,
					previous: res.data.previous,
					render: true
				});
			});
		}
	}
	
	getDataPlanets (url, data) {
		if(data != null) {
			axios.get(url + data).then(res => {
				this.setState({
					planets: res.data.results,
					next: res.data.next,
					previous: res.data.previous,
					render: true
				});
			});
		}else {
			axios.get(url).then(res => {
				this.setState({
					planets: res.data.results,
					next: res.data.next,
					previous: res.data.previous,
					render: true
				});
			});
		}
	}

	getDataVehicles (url, data) {
		if(data != null) {
			axios.get(url + data).then(res => {
				this.setState({
					vehicles: res.data.results,
					next: res.data.next,
					previous: res.data.previous,
					render: true
				});
			});
		}else {
			axios.get(url).then(res => {
				console.log(res)
				this.setState({
					vehicles: res.data.results,
					next: res.data.next,
					previous: res.data.previous,
					render: true
				});
			});
		}
	}

	getDataSpecies (url, data) {
		if(data != null) {
			axios.get(url + data).then(res => {
				this.setState({
					species: res.data.results,
					next: res.data.next,
					previous: res.data.previous,
					render: true
				});
			});
		}else {
			axios.get(url).then(res => {
				this.setState({
					species: res.data.results,
					next: res.data.next,
					previous: res.data.previous,
					render: true
				});
			});
		}
	}

	getDataStarships (url, data) {
		if(data != null) {
			axios.get(url + data).then(res => {
				this.setState({
					starships: res.data.results,
					next: res.data.next,
					previous: res.data.previous,
					render: true
				});
			});
		}else {
			axios.get(url).then(res => {
				this.setState({
					starships: res.data.results,
					next: res.data.next,
					previous: res.data.previous,
					render: true
				});
			});
		}
	}

	next () {
		if(this.props.url === 'people') {
			this.getDataPeople(this.state.next, null);
		}
		if(this.props.url === 'planets') {
			this.getDataPlanets(this.state.next, null);
		}
		if(this.props.url === 'starships') {
			this.getDataStarships(this.state.next, null);
		}
		if(this.props.url === 'species') {
			this.getDataSpecies(this.state.next, null);
		}
		if(this.props.url === 'vehicles') {
			this.getDataVehicles(this.state.next, null);
		}
	}

	previous() {
		if(this.props.url === 'people') {
			this.getDataPeople(this.state.previous, null);
		}
		if(this.props.url === 'planets') {
			this.getDataPlanets(this.state.previous, null);
		}
		if(this.props.url === 'starships') {
			this.getDataStarships(this.state.previous, null);
		}
		if(this.props.url === 'species') {
			this.getDataSpecies(this.state.previous, null);
		}
		if(this.props.url === 'vehicles') {
			this.getDataVehicles(this.state.previous, null);
		}
	}

	render () {
		return (
			<div>
				<div className="col-12 col-lg-8 mx-auto detail">
					<div>
						{this.state.peoples.length > 0 ?
							<div className="py-0 py-lg-5">
								<div className="title_detail">
									<h1>Peoples</h1>
								</div>
								<hr />
								<div className="row">
									{this.state.peoples.map((people , i)=> {
										return (
											<div key={i} className="col-12 col-md-6  p-3 p-md-5 p-lg-5">
												<div>
													<div>
														<div className="text-light text-center mb-4">
															<h4>{people.name}</h4>
														</div>
														<h6>Birth Year : {people.birth_year}</h6>
														<h6>Eye Color : {people.eye_color}</h6>
														<h6>Gender : {people.gender}</h6>
														<h6>Hair Color : {people.hair_color}</h6>
														<h6>Height : {people.height}</h6>
														<h6>Mass : {people.mass}</h6>
														<h6>Skin Color : {people.skin_color}</h6>
													</div>
												</div>
												<hr className="d-block d-md-none d-lg-none" />
											</div>
										)
									})}
								</div>
							</div>
							: null
						}
						{this.state.planets.length > 0 ? 
							<div className="py-0 py-lg-5">
								<div className="title_detail">
									<h1>Planets</h1>
								</div>
								<hr />
								<div className="row">
									{this.state.planets.map((planet , i)=> {
										return (
											<div key={i} className="col-12 col-md-6  p-3 p-md-5 p-lg-5">
												<div>
													<div>
														<div className="text-light text-center mb-4">
															<h4>{planet.name}</h4>
														</div>
														<h6>Diameter : {planet.diameter}</h6>
														<h6>Climate : {planet.climate}</h6>
														<h6>Gravity : {planet.gravity}</h6>
														<h6>Orbital : {planet.orbital_period}</h6>
														<h6>Populations : {planet.population}</h6>
														<h6>Rotation : {planet.rotation_period}</h6>
														<h6>Water : {planet.surface_water}</h6>
														<h6>Terrain : {planet.terrain}</h6>
													</div>
												</div>
												<hr className="d-block d-md-none d-lg-none" />
											</div>
										)
									})}
								</div>
							</div>
							: null
						}
						{this.state.starships.length > 0 ? 
							<div className="py-0 py-lg-5">
								<div className="title_detail">
									<h1>Starships</h1>
								</div>
								<hr />
								<div className="row">
									{this.state.starships.map((starship , i)=> {
										return (
											<div key={i} className="col-12 col-md-6  p-3 p-md-5 p-lg-5">
												<div>
													<div>
														<div className="text-light text-center mb-4">
															<h4>{starship.name}</h4>
														</div>
														<h6>Model : {starship.model}</h6>
														<h6>Speed : {starship.max_atmosphering_speed}</h6>
														<h6>Passengers : {starship.passangers}</h6>
														<h6>Manufacturer : {starship.manufacturer}</h6>
														<h6>Length : {starship.length}</h6>
														<h6>Rating : {starship.hyperdrive_rating}</h6>
														<h6>Crew : {starship.crew}</h6>
														<h6>Cost : {starship.cost_in_credits}</h6>
														<h6>Cargo Capacity : {starship.cargo_capacity}</h6>
														<h6>Consumables : {starship.consumables}</h6>
													</div>
												</div>
												<hr className="d-block d-md-none d-lg-none" />
											</div>
										)
									})}
								</div>
							</div>
							: null
						}
						{this.state.species.length > 0 ? 
							<div className="py-0 py-lg-5">
								<div className="title_detail">
									<h1>Species</h1>
								</div>
								<hr />
								<div className="row">
									{this.state.species.map((species , i)=> {
										return (
											<div key={i} className="col-12 col-md-6  p-3 p-md-5 p-lg-5">
												<div>
													<div>
														<div className="text-light text-center mb-4">
															<h4>{species.name}</h4>
														</div>
														<h6>Height : {species.average_height}</h6>
														<h6>Lifespan : {species.average_lifespan}</h6>
														<h6>Classification : {species.classification}</h6>
														<h6>Designation : {species.designation}</h6>
														<h6>Eye Color : {species.eye_colors}</h6>
														<h6>Hair Color : {species.hair_colors}</h6>
														<h6>Language : {species.language}</h6>
														<h6>Skin Color : {species.skin_colors}</h6>
													</div>
												</div>
												<hr className="d-block d-md-none d-lg-none" />
											</div>
										)
									})}
								</div>
							</div>
							: null
						}
						{this.state.vehicles.length > 0 ? 
							<div className="py-0 py-lg-5">
								<div className="title_detail">
									<h1>Vehicles</h1>
								</div>
								<hr />
								<div className="row">
									{this.state.vehicles.map((vehicle , i)=> {
										return (
											<div key={i} className="col-12 col-md-6  p-3 p-md-5 p-lg-5">
												<div>
													<div>
														<div className="text-light text-center mb-4">
															<h4>{vehicle.name}</h4>
														</div>
														<h6>Model : {vehicle.model}</h6>
														<h6>Passengers : {vehicle.passangers}</h6>
														<h6>Speed : {vehicle.max_atmosphering_speed}</h6>
														<h6>Class : {vehicle.vehicles_class}</h6>
														<h6>Manufacturer : {vehicle.manufacturer}</h6>
														<h6>Length : {vehicle.length}</h6>
														<h6>Crew : {vehicle.crew}</h6>
														<h6>Cost : {vehicle.cost_in_credits}</h6>
														<h6>Cargo : {vehicle.cargo_capacity}</h6>
														<h6>Consumables : {vehicle.consumables}</h6>
													</div>
												</div>
												<hr className="d-block d-md-none d-lg-none" />
											</div>
										)
									})}
								</div>
							</div>
							: null
						}
					</div>
					{this.state.render === true ?
						<div className="d-flex justify-content-between py-2">
							<div>
								<button className="button_detail" onClick={() => {this.props.history.goBack()}}>Back</button>
							</div>
							<div className="text-right">
								{this.state.previous != null ?
									<button className="button_detail mr-3" onClick={() => this.previous()}>Previous</button>
									:
									null
								}
								<button className="button_detail" onClick={() => this.next()}>Next</button>
							</div>
						</div>
						: null
					}
				</div>
			</div>
		)
	}
}


export default withRouter(AllDetail);