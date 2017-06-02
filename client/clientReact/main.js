var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');



class InputComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			roommatename: '',
			chorename: '',
			entryInfo: []
		}

		this.createItem = this.createItem.bind(this);
	}
	componentDidMount(){
		console.log("this is this componentDidMount", this)
		var state = this.state;
		var self = this;
		request.get('http://localhost:9292/home/chores')
		.end((err, data) => {
			state.entryInfo = data.body;
			self.setState(state);
		})
	}
	createItem(chore){
		console.log("this is this in create item", this)
		var state = this.state;
		var self = this;
		request.post('http://localhost:9292/home/chores')
		.type('form')
		.send(chore)
		.end((err, data) => {
			console.log(data.body, "this is data.body")
			console.log(state, "this is state within the request")
			state.data = data.body;
			self.setState(state);
		})
	}
	render(){
		var chores = this.state.entryInfo;
		var reversedList = [];

		console.log(chores, "this is chores")
		if (chores.length > 0){
			console.log("in if")
				var listItems = chores.map((chore) =>
				<li key = {chore.id}>
					{chore.roommatename} {chore.chorename} on {chore.dateday}.
				</li>
			);
			reversedList = listItems.reverse();
		}		
		return (
			<div>
				{(chores.length === 0) ? <InitialView/> : null}
				<NewComponent createItem={this.createItem}/>
				{(chores.length > 0) ? <ul className="listItems">{reversedList}</ul> : null}
			</div>
		)
	}
}

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


class NewComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			roommatename: '',
			chorename: '',
		}
	}
	handleNameInput(e){
		this.setState({roommatename: e.target.value});
	}
	handleSelectChange(e){
		this.setState({chorename: e.target.value});
	}
	handleDataEntry(e){
		console.log("these are data entry props", this.props)
		console.log("state in handle data entry", this.state)
		e.preventDefault();
		this.props.createItem(this.state);
	}
	render() {
		return (
			<div className="inputComponentDiv">
				<form onSubmit={this.handleDataEntry.bind(this)}>
					<div>
						<input type="text" value={this.state.roommatename} onChange={this.handleNameInput.bind(this)}/>
					</div>
					<div>
						<select value={this.state.value} onChange={this.handleSelectChange.bind(this)}>
							<option>Select</option>
							<option value="cleaned the litter box">cleaned litter box</option>
							<option value="bought food">bought food</option>
							<option value="trimmed the kitty nails">trimmed nails</option>
							<option value="fed the kitty">fed the kitty</option>
						</select>
					</div>
					<div>
						<button type="submit"> Log :) </button>
					</div>
				</form>
			</div>
		)
	}
}



ReactDOM.render(<InputComponent/>, document.getElementById('container'));
