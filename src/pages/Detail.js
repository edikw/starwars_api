import React, {Component} from 'react';
import axios from 'axios';
import config from '../config';
import DetailFilm from '../components/DetailFilm';
import Navbar from '../components/Navbar'

class Detail extends Component {
	constructor () {
		super ()
		this.state = {
			detail_films: []
		}
	}

	componentDidMount () {
		this.getFilmsId(this.props.match.params.id);
	}

	getFilmsId (id) {
		axios.get(config.base_url + 'films/' + id).then(res => {
			if(res.status === 200) {
				this.setState({detail_films: [res.data]});
			}
		})
	}
	
	render () {
		return (
			<div>
				<Navbar />
				<DetailFilm detail_film = {this.state.detail_films} />
			</div>
		)
	}
}

export default Detail;