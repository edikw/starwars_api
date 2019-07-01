import React, {Component} from 'react';
import Characters from '../components/Characters';
import Planets from '../components/Planets';
import Species from '../components/Species';
import Starships from '../components/Starships';
import Vehicles from '../components/Vehicles';
import '../App.scss';
import {withRouter} from "react-router-dom";

class DetailFilm extends Component {
	
	linkPage () {
		this.props.history.push('/');
	}

	render () {
		return (
			<div>
				<div className="col-12 col-md-10 col-lg-8 mx-auto py-0 py-lg-3 detail">
					{this.props.detail_film.map((detail, i) => {
						return (
							<div key={i}>
								<div className="py-3">
									<h5 className="text-center">{detail.title}</h5>
									<h6 className="text-center">Episode : {detail.episode_id}</h6>
									<h6 className="text-center">Release : {detail.release_date}</h6>
									<h6 className="text-center">Producer: {detail.producer} </h6>
								</div>
								<hr />
								<div className="p-3">
									<h6>{detail.opening_crawl} </h6><br/>
								</div>
								<div className="p-0 p-md-2 p-lg-3">
									<div className="d-block d-md-flex d-lg-flex">
										<div className="col">
											<h6 className="text-center mb-4">{detail.characters.length} Characters:</h6>
											<Characters character={detail.characters} />
										</div>
										<hr className="d-block d-md-none d-lg-none"/>
										<hr className="d-none d-md-none d-lg-block hr_vertical" />
										<div className="col">
											<h6 className="text-center mb-4 mt-2 mt-md-0 mt-lg-0">{detail.planets.length} Planets:</h6>
											<Planets planets={detail.planets} />
										</div>
									</div>
									<hr />
									<div className="d-block d-md-flex d-lg-flex mt-2 mt-md-5 mt-lg-5">
										<div className="col">
											<h6 className="text-center mb-4">{detail.species.length} Species: </h6>
											<Species species={detail.species} />
										</div>
										<hr className="d-block d-md-none d-lg-none" />
										<hr className="d-none d-md-none d-lg-block hr_vertical_two" />
										<div className="col">
											<h6 className="text-center mb-4 mt-2 mt-md-0 mt-lg-0">{detail.starships.length} Starships:</h6>
											<Starships starships={detail.starships}/> 
										</div>
									</div>
									<hr />
									<div className="d-flex mt-2 mt-md-5mt-lg-5">
										<div>
											<h6 className="text-center mb-4">{detail.vehicles.length} Vehicles:</h6> 
											<Vehicles vehicles={detail.vehicles}/>
										</div>
									</div>
									<hr />
								</div>
							</div>
						)
					})}
					{this.props.detail_film.length > 0 ? 
						<div className="p-3">
							<button className="button_detail" onClick={() => this.linkPage()}>Back</button>
						</div>
						: null
					}
				</div>
			</div>
		)
	}
}

export default withRouter(DetailFilm);