import React, {Component} from 'react';
import axios from 'axios';
import config from '../config.js';
import Session from '../components/Sessions';
import Navbar from '../components/Navbar';

class Home extends Component{
	constructor() {
		super()
		this.state = {
			films: []
		}
	}

	componentDidMount () {
		this.getFilms();
	}

	getFilms () {
		axios.get(config.base_url + 'films/').then(res => {
			if(res.status === 200) {
				let data = res.data.results;
				data.sort((a, b) => parseFloat(a.episode_id) - parseFloat(b.episode_id))
				this.setState({films : data});
			}

		});
	}
	render() {
		return (
			<div>
				<Navbar />
				<Session films={this.state.films} />
			</div>
		)
	}
}

export default Home;