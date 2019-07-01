import React, {Component} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Details from './pages/AllDetail'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={Home} />
					<Route exact path="/detail-films/:id" component={Detail} />
					<Route exact path="/details/:id" component={Details} />
				</div>
			</Router>
			)
		}
}

export default App;
