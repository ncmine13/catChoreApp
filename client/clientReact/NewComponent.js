var React = require('react');

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

module.exports = NewComponent;