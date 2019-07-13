import React, {Component} from 'react'
import './Sidebar.css'
import Channel from './Channel'
import axios from 'axios'

class Sidebar extends Component {
	// Data
	state = {
		channels: []
	}
	// Lifecycle
	componentDidMount() {
		axios.get(`${process.env.REACT_APP_API}/api/channels`).then((res) => {

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
			<div id="sidebar">
				<ul className="list-unstyled">
					{
						this.state.channels.map((c) => {
							return <Channel channel={c} key={c._id} selectChannel={this.selectChannel} />
						})
					}
				</ul>
			</div>
				)
	}
}

export default Sidebar
