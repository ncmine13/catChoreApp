var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');
// var Select = require('react-select');

class MainComponent extends React.Component {
	render() {
		return (
			<div>
				<InputComponent />
			</div>
		)
	}
}

class InputComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			roommateName: ''
		}
		this.handleNameInput = this.handleNameInput.bind(this)
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleDataEntry = this.handleDataEntry.bind(this);
	}

	handleNameInput(e){
		this.setState({roommateName: e.target.value});
	}
	handleSelectChange(e){
		this.setState({value: e.target.value});
	}
	handleDataEntry(e){
		e.preventDefault();
		console.log(this.state)
	}
	render(){
		return (
			<div className="inputComponentDiv">
				<div>
					<form onSubmit={this.handleDataEntry.bind(this)}>
						<div>
							<input type="text" value={this.state.roommateName} onChange={this.handleNameInput.bind(this)}/>
						</div>
						<div>
							<select value={this.state.value} onChange={this.handleSelectChange}>
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
			</div>

		)
	}
}


ReactDOM.render(<MainComponent/>, document.getElementById('container'));
