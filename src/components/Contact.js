import React, {Component} from "react";

import './../styles/contact.scss'


export default class Contact extends Component {
	render = () => {
		const { contact:{ title }, icon, classlist } = this.props;

		return (
			<div className={'contact ' + classlist}>
				<div className="contact__icon-wrp">{icon}</div>
				<div className="contact__title">{title}</div>
			</div>
		)
	}
}