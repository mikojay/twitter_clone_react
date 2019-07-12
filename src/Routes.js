import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Signup from './Signup'
import App from './App'
import Login from './Login'

class Routes extends Component {
	// Data
	state = {}
	// Functions
	// Render
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/app" component={App} />
					<Route path="/login" component={Login} />
					<Route path="/" component={Signup} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
