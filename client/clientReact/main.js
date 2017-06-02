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
		console.log(this.state.data, "this is datas")
		var chores = this.state.entryInfo;
		console.log(chores, "this is chores")
		var listItems = chores.map((chore) =>
			<li key = {chore.id}>
				{chore.roommatename} did {chore.chorename} on {chore.dateday}.
			</li>
		);
		return (
			<div>
				<NewComponent createItem={this.createItem}/>
				<ul className="listItems">
					{listItems}
				</ul>
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
							<option value="litter">cleaned litter box</option>
							<option value="foodPurchase">bought food</option>
							<option value="nails">trimmed nails</option>
							<option value="feed">fed the kitty</option>
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
