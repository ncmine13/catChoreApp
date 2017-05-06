var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');
// var Select = require('react-select');

class MainComponent extends React.Component {

	// getNameInfo(roommateName) {
	// 	console.log(roommateName);
	// 	var state = this.state;
	// 	state.roommateName = roommateName;
	// 	this.setState(state);
	// }
	render() {
		return (
			<div>
				<InputComponent />
			</div>
		)
	}

}

				// <SubmitComponent getNameInfo={this.getNameInfo} />

class InputComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			roommateName: ''
		}
	}

	handleNameInput(e){
		this.setState({roommateName: e.target.value});
		// var state = this.state;
		// state.roommateName = e.target.value;
		// this.setState(state);
		// console.log("this is roommate " + this.state.roommateName)
		console.log(this.state)
	}
	handleDataEntry(e){
		e.preventDefault();
		console.log(this)
		// console.log("clickkkk");
		// console.log(this.state);
		// console.log("This is the state: " + this.state.roommateName)
		// this.props.getNameInfo(this.state.roommateName);
		// console.log("roommate name is " + this.state.roommateName);
	}
	render(){
		return (
			<div className="inputComponentDiv">
				<div>
					<form onSubmit={this.handleDataEntry.bind(this)}>
						<div>
							<input ref="name" type="text" value={this.state.roommateName} onChange={this.handleNameInput.bind(this)}/>
						</div>
						<div>
							<select>
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
//				<input onChange={this.handleNameChangeInput} name="roommateName" type="text" value={this.state.roommateName}/>



// class SelectChore extends React.Component {
// 	render(){
// 		return (
// 			<div className="choreSelectorDiv">

// 			</div>
// 		)
// 	}
// }
//
// class SubmitComponent extends React.Component {
//
// 	render(){
// 		return (
// 			<div>
// 				<InputComponent />
// 				<SelectChore />
// 			</div>
// 		)
// 	}
// }
//
//

ReactDOM.render(<MainComponent/>, document.getElementById('container'));
