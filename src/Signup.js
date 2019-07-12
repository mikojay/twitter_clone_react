import React, {Component} from 'react'

class Signup extends Component {
	// Data
	state = {

	}
	// Functions

	// Render
	render() {
		return (
			<div className="row">
				<div className="col-4 offset-4">
					<div className="card signup">
						<div className="card-body">
							<form>
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Full Name..." />
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
