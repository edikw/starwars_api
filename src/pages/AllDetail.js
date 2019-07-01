import React, {Component} from 'react';
import AllDetails from '../components/AllDetail';

class Details extends Component {
	render () {
		return (
			<div>
				<AllDetails url={this.props.match.params.id} />
			</div>
		)
	}
}

export default Details;