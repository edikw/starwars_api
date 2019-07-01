import React, {Component} from 'react';
import axios from 'axios';
import '../App.scss';

class Starships extends Component {
	constructor () {
		super ()
		this.state = {
			count: 0,
			starships: []
		}
	}

	componentDidMount () {
		this.getStarships();
	}

	getStarships () {
		let data = []
		axios.get(this.props.starships[this.state.count]).then(res => {
			if(res.status === 200) {
				data.push(res.data);
				this.setState({starships: data});
			}
		});
	}

	next () {
		this.state.count++
		this.getStarships();
	}

	previous () {
		this.state.count--
		this.getStarships();
	}

	render () {
		return (
			<div>
				<div>
					{this.state.starships.map((starship, i) => {
						return (
							<div key={i}>
								<h6>Name : {starship.name}</h6>
								<h6>Model : {starship.model}</h6>
								<h6>Length : {starship.length}</h6>
								<h6>Hyperdrive : {starship.hyperdrive_rating}</h6>
								<h6>Passengers : {starship.passengers}</h6>
								<h6>Starships Class : {starship.starship_class}</h6>
								<h6>Speed : {starship.max_atmosphering_speed}</h6>
								<h6>Manufacture : {starship.manufacturer}</h6>
								<h6>Crew : {starship.crew}</h6>
								<h6>Consumables : {starship.consumables}</h6>
								<h6>Cargo Capacity : {starship.cargo_capacity}</h6>
								<h6>Cost : {starship.cost_in_credits}</h6>
								<div>
									{this.state.count > 0 ?
										<span className="arrow" onClick={() => this.previous()}>&#8592;</span> : null
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

export default Starships;