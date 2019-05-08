import React from 'react';
import Person from './Person';

const PersonList = () => {
	const people = [
		{
			img: 22,
			name: 'Wemimo',
			job: 'Developer'
		},
		{
			img: 23,
			name: 'Bola',
			job: 'Designer'
		},
		{
			img: 24,
			name: 'Peter',
			job: 'Artist'
		}
	];
	return (
		<section>
			<Person person={people[0]} />
			<Person person={people[1]}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, impedit excepturi perferendis quia, nulla
				architecto cupiditate eveniet expedita ratione sequi, sint ea dolore dicta quibusdam pariatur in. Officia,
				impedit dignissimos.
			</Person>
			<Person person={people[2]} />
		</section>
	);
};

export default PersonList;
