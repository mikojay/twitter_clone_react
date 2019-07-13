import React, {Component} from 'react'

class Home extends Component {
	// Data

//Function
logout() {
	window.location.reload()
}

	// Render
	render() {
		return (
			<i onClick={this.logout} className="fas fa-home"></i>
		)
	}
}

export default Home
