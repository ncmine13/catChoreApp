var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');
// var Select = require('react-select');


class InputComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			roommatename: '',
			chorename: '',
			entryInfo: []
		}

		this.handleNameInput = this.handleNameInput.bind(this)
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleDataEntry = this.handleDataEntry.bind(this);
	}

	componentDidMount(){
		var state = this.state;
		var self = this;
		request.get('http://localhost:9292/home/chores')
		.end(function(err, data){
			state.entryInfo = data.body;
			self.setState(state);
			console.log(state, " this is the state in componentdidmount")
		})
	}
	handleNameInput(e){
		this.setState({roommatename: e.target.value});
	}
	handleSelectChange(e){
		this.setState({chorename: e.target.value});
	}
	handleDataEntry(e){
		e.preventDefault();
		console.log("state object: ", this.state)
	}
	render(){
		// console.log(this.state.entryInfo, "render state")
		// let entries = this.state.entryInfo
		// console.log(entries, "these are entries")
		console.log(this.state, "this is state")

		// let choreHistory = entries.map((entry, i) =>
		// 	<li key={i}>
		// 		{entry.roommatename}
		// 	</li>
		// )

		return (

			<div>
				<NewComponent handleDataEntry={this.handleDataEntry} handleNameInput={this.handleNameInput} handleSelectChange={this.handleSelectChange}/>
			</div>

		)
	}
}
class NewComponent extends React.Component {
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
			<div className="inputComponentDiv">
				<h1>yo</h1>

			</div>

		)
	}
}


// <form onSubmit={this.handleDataEntry.bind(this)}>
// 	<div>
// 		<input type="text" value={this.state.roommatename} onChange={this.handleNameInput.bind(this)}/>
// 	</div>
// 	<div>
// 		<select value={this.state.value} onChange={this.handleSelectChange}>
// 			<option value="litter">cleaned litter box</option>
// 			<option value="foodPurchase">bought food</option>
// 			<option value="nails">trimmed nails</option>
// 			<option value="feed">fed the kitty</option>
// 		</select>
// 	</div>
// 	<div>
// 		<button type="submit"> Log :) </button>
// 	</div>
// </form>


//
// class ListComponent extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			entryInfo: []
// 		}
// 		console.log("ugh state ", this.state)
//
// 	}
// 	render(){
// 		return (
// 			<h1>list component</h1>
// 		)
// 	}
// }

// function () {
// 		const entries = this.state.entryInfo
// 		console.log(entries, "these are entries")
// 		// const listItems = roommates.map((roommate, ) =>
// 		// <li key={roommates.id}></li>
// 		// )
// 		return (
//
// 		);

// }


ReactDOM.render(<InputComponent/>, document.getElementById('container'));
