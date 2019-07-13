import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './Sidebar'
import Content from './Content'
import Logout from './Logout'
import Home from './home'

class App extends Component {
	// Data
	state = {
		channel: ''
	}
	// Functions
	getMessages = (id) => {
		this.setState({
			channel: id
		})
	}
	// Render
	render() {
		return (

			<div className='container bg-light p-3'>
	<div className="row">
		<div className="col p-2 d-flex justify-content-between">
			<span>
				<Home/>
			</span>
			<span>
				<i className="far fa-bell"></i>
				Notifications
			</span>
			<span>
				<i className="far fa-envelope"></i>
				Messages
			</span>
		</div>
		<div className="col p-2 text-right">
			<Logout/>
		</div>
	</div>
	<div className="row p-4">
		<h1>Chang Twitter</h1>
	</div>
	<div className="row p-4">
		<div className="col p-2 text-center d-flex justify-content-center flex-column">
			<Sidebar getMessages={this.getMessages}/>
			<Content channel={this.state.channel}/>
		</div>
	</div>
	<div className="row">
	</div>
</div>
		)
	}
}

export default App
