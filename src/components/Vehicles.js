import React, {Component} from 'react';
import axios from 'axios';
import '../App.scss';
class Vehicles extends Component {
	constructor () {
		super()
		this.state = {
			count: 0,
			vehicles: []
		}
	}

	componentDidMount () {
		this.getVehicles();
	}

	getVehicles () {
		let data = [];
		axios.get(this.props.vehicles[this.state.count]).then(res => {
			if(res.status === 200) {
				data.push(res.data);
				this.setState({vehicles: data});
			}
		})
	}

	next () {
		this.state.count++
		this.getVehicles();
	}

	previous () {
		this.state.count--
		this.getVehicles();
	}

	render () {
		return (
			<div>
				<div>
					{this.state.vehicles.map((vehicle, i) => {
						return (
							<div key={i}>
								<h6>Name : {vehicle.name}</h6>
								<h6>Model : {vehicle.model}</h6>
								<h6>Speed : {vehicle.max_atmosphering_speed}</h6>
								<h6>Length : {vehicle.length}</h6>
								<h6>Passengers : {vehicle.passengers}</h6>
								<h6>Vehicle Class : {vehicle.vehicle_class}</h6>
								<h6>Manufacture : {vehicle.manufacturer}</h6>
								<h6>Crew : {vehicle.crew}</h6>
								<h6>Cost : {vehicle.cost_in_credits}</h6>
								<h6>Consumables: {vehicle.cunsumables}</h6>
								<h6>Cargo Capacity : {vehicle.cargo_capacity}</h6>
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

export default Vehicles;