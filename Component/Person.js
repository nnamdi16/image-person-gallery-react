import React from 'react';
import '../App.css';

const Person = props => {
	const { img, name, job } = props.person;
	const { children } = props;
	const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
	return (
		<div className="person">
			<img src={url} alt="" />
			<h4>{name}</h4>
			<h4>{job}</h4>
			{children}
		</div>
	);
};

export default Person;
