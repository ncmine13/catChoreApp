var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');
// var Select = require('react-select');

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
				<SubmitComponent getNameInfo={this.getNameInfo} />
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
	render: function(){
		return (
			<div className="inputComponentDiv">
				<input onChange={this.handleNameChangeInput} name="roommateName" type="text" value={this.state.roommateName}/>
			</div>

		)
	}
})

var SelectChore = React.createClass({
	getInitialState: function(){
		return {}
	},
	render: function(){
		return (
			<div className="choreSelectorDiv">
				<select>
					<option value="litter">cleaned litter box</option>
					<option value="foodPurchase">bought food</option>
					<option value="nails">trimmed nails</option>
					<option value="feed">fed the kitty</option>
				</select>
			</div>
		)
	}
})

var SubmitComponent = React.createClass({
	getInitialState: function(){
		return {}
	},
	handleDataEntry: function(){
		console.log("clickkkk");
		console.log(this.state);
		console.log("This is the state: " + this.state.roommateName)
		this.props.getNameInfo(this.state.roommateName);
		console.log("roommate name is " + this.state.roommateName);
	},
	render: function(){
		return (
			<div>
				<InputComponent />
				<SelectChore />
				<div>
					<button onClick={this.handleDataEntry}> Log :) </button>
				</div>
			</div>
		)
	}
})



ReactDOM.render(<MainComponent/>, document.getElementById('container'));
