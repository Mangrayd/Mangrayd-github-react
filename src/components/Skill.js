import React, {Component} from "react";

import './../styles/Skill.scss';
import Progress from "./Progress";

import {ReactComponent as SpeedIcon} from './../assets/icons/speed.svg'


export default class Skill extends Component {
	render = () => {
		const { skill:{ lang, percent }, classList } = this.props;
		return (
			<div className={`skill ${classList}`}>
				<div className="skill__icon-wrp">
					<SpeedIcon/>
				</div>
				<div className="skill__lang">{lang}</div>
				<Progress classList="skill__progress" width={percent}/>
			</div>
		)
	}
}