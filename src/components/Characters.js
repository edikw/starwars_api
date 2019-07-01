import React, {Component} from 'react';
import axios from 'axios';
import '../App.scss';

class Character extends Component {
	constructor () {
		super()
		this.state = {
			count: 0,
			characters: []
		}
	}

	componentDidMount () {
		this.getCharacter();
	}

	getCharacter () {
		let data = [];
		axios.get(this.props.character[this.state.count]).then(res => {
			if(res.status === 200){
				data.push(res.data);
				this.setState({characters: data});
			}
		})
	}

	next () {
		this.state.count++
		this.getCharacter();
	}

	previous () {
		this.state.count--
		this.getCharacter();
	}

	render () {
		return (
			<div>
				{ this.state.characters.map((character, i) => {
					return (
						<div key={i}>
							<div>
								<div>
									<h6>Name : {character.name}</h6>
								</div>
								<div>
									<h6>Birth Year : {character.birth_year}</h6>
									<h6> Eye Color: {character.eye_color}</h6>
									<h6>Gender : {character.gender}</h6>
									<h6>Hair Color: {character.hair_color}</h6>
									<h6>Height: {character.height}</h6>
									<h6>Skin Color : {character.skin_color}</h6>
								</div>
							</div>
						</div>
					)
				})}
				<div className="text-right text-lg-left">
					{this.state.count > 0 ?
						<span className="arrow" onClick={() => this.previous()}>&#8592;</span>
						: null

					}
					<span onClick={() => this.next()} className="arrow">&#8594;</span>
				</div>
			</div>
		)
	}
}

export default Character;