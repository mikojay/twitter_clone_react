import React, {Component} from 'react'
import './Sidebar.css'
import Channel from './Channel'
import axios from 'axios'

class Sidebar extends Component {
	// Data
	state = {
		channels: [
			{
			id: 1,
			name: "coding",
		},{
			id: 2,
			name: "js",
		},{
			id: 3,
			name: "lol",
		},{
			id: 4,
			name: "trump",
		},{
			id: 5,
			name: "food",
		},{
			id: 6,
			name: "bootcamp",
		},{
			id: 7,
			name: "kosamui",
		}
	]
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
		let channel = channels.find((c) => c.id === id)
		channel.active = true
		this.setState({channels})
		// this.props.getMessages(id)
	}
	// Render
	render() {
		return (
			<div id="sidebar">
				<ul className="list-unstyled">
					{
						this.state.channels.map((c) => {
							return <Channel channel={c} key={c.id} selectChannel={this.selectChannel} />
						})
					}
				</ul>
			</div>
				)
	}
}

export default Sidebar
