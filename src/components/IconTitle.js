import React, {Component} from "react";

import './../styles/IconTitle.scss'


export default class IconTitle extends Component {
	render = () => {
		const { title, icon, ...props } = this.props;
		return (
			<h2 className="IconTitle" {...props}>
				<div className="IconTitle__icon-wrp">{icon}</div>
				<div className="IconTitle__title">{title}</div>
			</h2>
		)
	}
}