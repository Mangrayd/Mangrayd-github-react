import React, {Component} from "react";
import {connect} from "react-redux";
import {isEmpty, map} from "underscore";

import Contact from "./Contact";

import {ReactComponent as PointIcon} from "../assets/icons/point.svg";
import {ReactComponent as MobileIcon} from "../assets/icons/mobile.svg";
import {ReactComponent as MailIcon} from "../assets/icons/mail.svg";

import './../styles/ContactsList.scss'


const mapStateToProps = state => ({
	person: state.person.data,
});

class ContactsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			icons: [
				<PointIcon/>,
				<MobileIcon/>,
				<MailIcon/>,
			]
		};
	}
	render = () => {
		const {person} = this.props;

		if (isEmpty(person)) { return (<div>empty</div>)}

		return (
			<div className="ContactsList">
				{map(person.contacts, (contact, i) => (<Contact contact={contact} classlist={'ContactsList__item'} icon={this.state.icons[i]} key={i} />))}
			</div>
		)
	}
}
export default connect(mapStateToProps)(ContactsList);