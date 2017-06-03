var React = require('react');
var ReactDOM = require('react-dom');
var NewComponent = require('./NewComponent');
var InitialView = require('./InitialView');
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
			console.log(data.body)
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
			self.componentDidMount();
		})
	}
	render(){
		var chores = this.state.entryInfo;
		var reversedList = [];
		if (chores.length > 0){
				var listItems = chores.map((chore) =>
				<li key = {chore.id}>
					{chore.roommatename} {chore.chorename} on {chore.dateday}.
				</li>
			);
			reversedList = listItems.reverse();
		}		
		return (
			<div>
				<NewComponent createItem={this.createItem}/>
				{(chores.length === 0) ? <InitialView/> : <div className="listDiv"><ul className="listItems">{reversedList}</ul></div>}
			</div>
		)
	}
}


ReactDOM.render(<InputComponent/>, document.getElementById('container'));
module.exports = InputComponent;