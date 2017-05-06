var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');

var MainComponent = React.createClass({
	getInitialState: function(){
		return{roommateName: ''}
	},
	getNameInfo: function(roommateName){
		console.log(roommateName);
		var state = this.state;
		state.roommateName = roommateName;
		this.setState(state);
	},
	render: function(){
		return (
			<div>
				<InputComponent getNameInfo={this.getNameInfo} />
			</div>
		)
	}
})

var InputComponent = React.createClass({
	getInitialState: function(){
		return {roommateName: ''}
	},
	handleNameChangeInput: function(e){
		var state = this.state;
		state.roommateName = e.target.value;
		this.setState(state);
		console.log("this is roommate " + this.state.roommateName)
		console.log(this.state)
	},
	handleNameEntry: function(){
		console.log("clickkkk");
		console.log("these are props", this.props);
		console.log("This is the state: " + this.state.roommateName)
		this.props.getNameInfo(this.state.roommateName);
		console.log("roommate name is " + this.state.roommateName);
	},
	render: function(){
		return (
			<div>
				<h1>Input component</h1>
				<div>
					<input onChange={this.handleNameChangeInput} name="roommateName" type="text" value={this.state.roommateName}/>
					<div><button onClick={this.handleNameEntry}> Log :) </button></div>
				</div>
			</div>

		)
	}
})


ReactDOM.render(<MainComponent/>, document.getElementById('container'));
