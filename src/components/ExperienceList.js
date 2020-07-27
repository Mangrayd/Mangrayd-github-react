import React, {Component} from "react";

import { connect } from 'react-redux';

import {map} from "underscore";
import {fetchPositions} from "../store/Positions/actions";
import ExperienceCard from "./ExperienceCard";


const mapStateToProps = state => ({
	positions: state.positions.list,
});

const mapDispatchToProps = dispatch => ({
	fetchPositions: () => dispatch(fetchPositions.trigger()),
});

class ExperienceList extends Component{
	componentDidMount() {
		this.props.fetchPositions();
	}

	render = () => {
		const { positions } = this.props;
		return (
			<div className="ExperienceList">
				{map(positions, item => (<ExperienceCard item={item} key={item.place}/>))}
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ExperienceList);