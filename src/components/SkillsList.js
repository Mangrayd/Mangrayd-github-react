import React, {Component} from "react";

import { connect } from 'react-redux';
import './../styles/SkillsList.scss';
import Skill from "./Skill";
import {map} from "underscore";
import {fetchSkills} from "../store/Skills/actions";


const mapStateToProps = state => ({
	skills: state.skills.list,
});

const mapDispatchToProps = dispatch => ({
	fetchSkills: () => dispatch(fetchSkills.trigger()),
});

class SkillsList extends Component{
	componentDidMount() {
		this.props.fetchSkills();
	}

	render = () => {
		const {  skills } = this.props;
		return (
			<div className="SkillsList">
				{map(skills, skill => (<Skill key={skill.lang} skill={skill} classList="SkillsList__item"/>))}
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SkillsList);