import axios from 'axios';


export const fetchSkillsRequest = () => (
	axios.get('/data/skills.json')
);
export const fetchPositionsRequest = () => (
	axios.get('/data/positions.json')
);

export const fetchPersonRequest = () => (
	axios.get('/data/person.json')
);
