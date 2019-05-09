import React, { Component } from 'react';
import '../App.css';
// import Button from './Button';
class Book extends Component {
	state = {
		count: 0,
		showInfo: true
	};

	handleShowInfo = () => {
		this.setState({
			showInfo: !this.state.showInfo
		});
	};
	handleClick = () => {
		// console.log('This is a great information');
		this.setState({
			count: this.state.count + 1
		});
	};

	render() {
		const { id, img, Title, Author } = this.props.info;
		const { handleClick, deleteItem } = this.props;
		// console.log(handleClick);
		return (
			<div className="book">
				<img src={img} width="150px" alt="book" />
				<div>
					<h4>Title: {Title}</h4>
					<h6>BY: {Author}</h6>
					<button onClick={this.handleClick}>Click Me</button>
					<h1>count: {this.state.count}</h1>
					<button onClick={() => deleteItem(id)}> Delete item </button>
					{/* <button onClick={deleteItem}>Your delete</button> */}
					{/* <Button handleClick={this.handleClick} /> */}
					<button onClick={this.handleShowInfo}>Show Info</button>
					{this.state.showInfo ? (
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a quibusdam distinctio eos rem possimus
							temporibus, saepe earum facere ad, repellendus maiores cupiditate quas animi sapiente sunt libero
							reiciendis harum.
						</p>
					) : null}
				</div>
			</div>
		);
	}
}

export default Book;
