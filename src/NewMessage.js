import React, {Component} from 'react'

class NewMessage extends Component {
	// Data
	state = {
		text: ''
	}

	// Functions
	changeText = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	clearMessage = () => {
		this.setState({
			text: ''
		})
	}

	// Render
	render() {
		return (
			<div className="NewMessage">
				<div className="input-group input-group-lg">
					<div className="input-group-prepend">
						<button type="submit" className="btn btn-success">Send</button>
					</div>
					<input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
				</div>
			</div>
		)
	}
}


export default NewMessage
