import React, {Component} from 'react'

class Signup extends Component {
	// Data
	state = {
		name: '',
		email: '',
		password: ''
	}
	// Functions
	changeName = (e) => {
		this.setState({name: e.target.value})
	}
	// Render
	render() {
		return (
			<div className="row">
				<div className="col-4 offset-4">
					<div className="card signup">
						<div className="card-body">
							<form>
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Full Name..." value={this.state.name} onChange={(e) => this.changeName(e)} />
								</div>
								<div className="form-group">
									<input type="email" className="form-control" placeholder="Email..." />
								</div>
								<div className="form-group">
									<input type="password" className="form-control" placeholder="Password..." />
								</div>
								<button className="btn btn-success">Signup</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Signup
