import React, { Component, PropTypes } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import ContentRemove from 'material-ui/svg-icons/content/remove-circle-outline';
import { TableRow, TableRowColumn } from 'material-ui/Table';

class gridRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			versions: props.versions,
			modes: props.modes,
			siteVersion: props.siteVersion,
		};
		this.handleUpdateVersion = this.handleUpdateVersion.bind(this);
		// this.handleNewRequestVersion = this.handleNewRequestVersion.bind(this);
		this.handleUpdateMode = this.handleUpdateMode.bind(this);
		// this.handleNewRequestMode = this.handleNewRequestMode.bind(this);
		this.onCheckActive = this.onCheckActive.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			siteVersion: nextProps.siteVersion,
		});
	}


	handleUpdateVersion(searchText) {
		const sv = { ...this.state.siteVersion, versionValue: searchText };
		this.setState({
			siteVersion: sv,
		});
	}



	// handleNewRequestVersion() {
	// 	const sv = { ...this.state.siteVersion, versionValue: '' };
	// 	this.setState({
	// 		siteVersion: sv,
	// 	});
	// }

	handleUpdateMode(searchText) {
		const sv = { ...this.state.siteVersion, modeValue: searchText };
		this.setState({
			siteVersion: sv,
		});
	}


	onCheckActive(e, isInputChecked) {
		const sv = { ...this.state.siteVersion, isActive: isInputChecked };
		this.setState({
			siteVersion: sv,
		});
	}
	// handleNewRequestMode() {
	// 	const sv = { ...this.state.siteVersion, modeValue: '' };
	// 	this.setState({
	// 		siteVersion: sv,
	// 	});
	// }

	render() {
		return (
			<TableRow id={this.state.siteVersion.id}>
				<TableRowColumn>
					<AutoComplete
						name="version"
						hintText="Select Site Vesion"
						filter={AutoComplete.noFilter}
						openOnFocus={true}
						dataSource={this.state.versions}
						searchText={this.state.siteVersion.versionValue}
						onUpdateInput={this.handleUpdateVersion}
					/>
				</TableRowColumn>
				<TableRowColumn>
					<AutoComplete
						name="mode"
						hintText="Select Site Mode"
						filter={AutoComplete.noFilter}
						openOnFocus={true}
						dataSource={this.state.modes}
						searchText={this.state.siteVersion.modeValue}
						onUpdateInput={this.handleUpdateMode}
					/>
				</TableRowColumn>
				<TableRowColumn style={{width: 24}}>
					<Checkbox
						label=""
						onCheck={this.onCheckActive}
						disabled={this.state.siteVersion.versionValue === '' && this.state.siteVersion.modeValue === ''}
						defaultChecked={this.state.siteVersion.isActive}
					/>
				</TableRowColumn>
				<TableRowColumn style={{width: 24}}>
					<IconButton onClick={() => this.props.deleteRow(this.state.siteVersion)}>
						<ContentRemove />
					</IconButton>
				</TableRowColumn>
			</TableRow>
		);
	}
}

gridRow.propTypes = {
	versions: PropTypes.array.isRequired,
	modes: PropTypes.array.isRequired,
	siteVersion: PropTypes.object.isRequired,
	deleteRow: PropTypes.func.isRequired,
	updateSiteVersion: PropTypes.func.isRequired,
};

export default gridRow;