import React, {Component} from 'react'
import './Content.css'
import moment from 'moment'

class Message extends Component {
	// Data
	state = {
		message: this.props.message
	}
	// Functions
	componentWillMount() {
		let message = this.state.message
		message.date = moment(message.date).format('D MMM YYYY - h:mma')
		this.setState({message})
	}
	// Render
	render() {
		return (
			<div className="message">
				<div className="author text-left">Jaschi Mikolajski</div>
					<div className="date text-right">Jul 10th</div>
				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
				<div className="hashtags">Hashtag1</div>
			</div>
		)
	}
}

export default Message
