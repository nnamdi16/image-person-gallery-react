import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		const { handleClick } = this.props;
		return (
			<button style={{ background: 'red', color: 'white', fontSize: '1.5rem' }} onClick={handleClick}>
				I am the lower button
			</button>
		);
	}
}
