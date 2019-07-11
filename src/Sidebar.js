import React, {Component} from 'react'
import './Sidebar.css'
import Channel from './Channel'
import axios from 'axios'

class Sidebar extends Component {
	// Data
	state = {
		workspace: 'Tortuga Coders',
		channels: []
	}
	// Lifecycle
	componentWillMount() {
		axios.get('http://localhost:4000/api/channels').then((res) => {
			this.setState({
				channels: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}

	// Functions
	selectChannel = (id) => {
		let channels = this.state.channels
		channels.forEach((c) => delete c.active)
		let channel = channels.find((c) => c._id === id)
		channel.active = true
		this.setState({channels})
		this.props.getMessages(id)
	}
	// Render
	render() {
		return (
			<div className="hashtags text-center">
						<nav className="navbar navbar-expand-lg navbar-light bg-light">
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<ul className="navbar-nav mr-auto">
									<li className="nav-item active">
										<span className="nav-link">#Hashtag1<span className="sr-only">(current)</span></span>
									</li>
									<li className="nav-item">
										<a className="nav-link">#Hashtag2</a>
									</li>
									<li className="nav-item">
										<a className="nav-link">#Hashtag3</a>
									</li>
									<li className="nav-item">
										<a className="nav-link">#Hashtag4</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				)
	}
}

export default Sidebar
