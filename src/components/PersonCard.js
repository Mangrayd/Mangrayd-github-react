import React, {Component} from 'react';
import './../styles/PersonCard.scss'
import {fetchPerson} from "../store/Person/actions";
import {connect} from "react-redux";

import {isEmpty} from 'underscore';
import avatar from './../assets/avatar.jpg'


const mapStateToProps = state => ({
	isFetching: state.person.isFetching,
	person: state.person.data,
});

const mapDispatchToProps = dispatch => ({
	fetchPerson: () => dispatch(fetchPerson.trigger()),
	getFullName: user => `${user.firstName} ${user.lastName}`,
});

class PersonCard extends Component {
	componentDidMount() {
		this.props.fetchPerson();
	}

	render = () => {
		const {person, getFullName} = this.props;

		if (isEmpty(person)) {
			return (<div>empty</div>)
		}
		console.log(person);
		return (
			<div className="PersonCard" style={{ "textAlign":"center" }}>
				<img className={'PersonCard__avatar'} src={avatar} alt={getFullName(person)}/>
				<div className="PersonCard__name">{getFullName(person)}</div>
				<div className="PersonCard__position">{person.position}</div>
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonCard);