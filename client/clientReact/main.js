var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');

var MainComponent = React.createClass({
	getInitialState: function(){
		return{}
	},
	render: function(){
		return (
			<div>
				<h1>This is react page</h1>
			</div>
		)
	}
})

ReactDOM.render(<MainComponent/>, document.getElementById('container'));