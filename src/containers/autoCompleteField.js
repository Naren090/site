import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import AutoComplete from 'material-ui/AutoComplete';

class AutoCompleteField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: props.searchText,
		};
		this.handleUpdateInput = this.handleUpdateInput.bind(this);
		this.handleNewRequest = this.handleNewRequest.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			searchText: nextProps.searchText,
		});
	}
	
	shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

	handleUpdateInput(searchText) {
		this.setState({
			searchText: searchText,
		});
	}

	handleNewRequest() {
		this.setState({
			searchText: '',
		});
	}

	render() {
		return (
			<div>
				<AutoComplete
					hintText="Select Site Vesion"
					filter={AutoComplete.noFilter}
					openOnFocus={true}
					dataSource={this.props.ds}
					searchText={this.state.searchText}
				/>
			</div>
		);
	}
}

AutoCompleteField.propTypes = {
	searchText: PropTypes.string.isRequired,
	ds: PropTypes.array.isRequired,
};

export default AutoCompleteField;