import React, {Component} from 'react';
import {connect} from "react-redux";
import {isEmpty} from 'underscore';

import './../styles/PersonCard.scss'


const mapStateToProps = state => ({
	person: state.person.data,
});

class About extends Component {
	render = () => {
		const {person} = this.props;

		if (isEmpty(person)) {return (<div>empty</div>)}

		return (<div style={{"fontSize":"12px","paddingLeft":"20px"}}>{person.info}</div>)
	}
}
export default connect(mapStateToProps)(About);