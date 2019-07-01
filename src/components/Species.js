import React, {Component} from 'react';
import axios from 'axios';
import '../App.scss';

class Species extends Component {
	constructor () {
		super ()
		this.state = {
			count: 0,
			species: []

		}
	}

	componentDidMount () {
		this.getSpecies();
	}

	getSpecies () {
		let data = [];
		axios.get(this.props.species[this.state.count]).then(res => {
			if(res.status === 200) {
				data.push(res.data);
				this.setState({species: data});
			}
		});
	}

	next () {
		this.state.count++
		this.getSpecies();
	}

	previous () {
		this.state.count--
		this.getSpecies();
	}

	render () {
		return (
			<div>
				<div>
					{this.state.species.map((species, i) => {
						return (
							<div key={i}>
								<h6>Name : {species.name}</h6>
								<h6>Eye Color : {species.eye_colors}</h6>
								<h6>Designation : {species.designation}</h6>
								<h6>Hair Color : {species.hair_colors}</h6>
								<h6>Language : {species.language}</h6>
								<h6>Skin Color : {species.skin_colors}</h6>
								<h6>Height : {species.average_height}</h6>
								<h6>Lifespan: {species.average_lifespan}</h6>
								<h6>Classification: {species.classification}</h6>
								<div>
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

export default Species;