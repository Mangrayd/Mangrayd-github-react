import React, {Component} from 'react';
import './../styles/ExperienceCard.scss'


export default class ExperienceCard extends Component {
	render = () => {
		const { item: { place, position, city, date, description } } = this.props;
		return (
			<article className="ExperienceCard" style={{"paddingLeft":"20px"}}>
				<header className="ExperienceCard__header">
					<div className="ExperienceCard__title">{place}</div>
					<div className="ExperienceCard__option">{city}</div>
					<div className="ExperienceCard__option">{position}</div>
					<div className="ExperienceCard__option">{date}</div>
				</header>
				<div className="ExperienceCard__body" dangerouslySetInnerHTML={{__html: description}}></div>
			</article>
		)
	}
}