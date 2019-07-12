import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './Sidebar'
import Content from './Content'
import Signup from './Signup'

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
				<i className="fas fa-home"></i>
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
		<div className="col p-2 text-center">
			<span>
				<i className="fab fa-twitter"></i>
			</span>
		</div>
		<div className="col p-2 text-right">
			<span>
				<div className="input-group mb-3">

<input type="text" className="form-control" placeholder="Search Twitter" aria-label="Recipient's username" aria-describedby="button-addon2"/>
</div>
			</span>
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
