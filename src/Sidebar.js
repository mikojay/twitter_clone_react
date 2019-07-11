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
				<span className="hashtags">Hashtag1</span>
				<span className="hashtags">Hashtag2</span>
				<span className="hashtags">Hashtag3</span>
				<span className="hashtags">Hashtag4</span>
					</div>
				)
	}
}

export default Sidebar
