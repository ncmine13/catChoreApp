var React = require('react');

class InitialView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			roommatename: '',
			chorename: '',
			entryInfo: []
		}
	}
	render() {
		return (
			<div>
				<h1>Welcome to your chore list! Log a chore.</h1>
			</div>
		)
	}
}

module.exports = InitialView;