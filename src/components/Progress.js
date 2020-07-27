import React, {Component} from "react";

import './../styles/progress.scss';

export default class Progress extends Component {
	render = () => {
		const { width, classList } = this.props;
		return (
			<div className={`progress ${classList}`}>
				<div className="progress__track" style={{"width":width}}></div>
			</div>
		)
	}
}