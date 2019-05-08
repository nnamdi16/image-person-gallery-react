import React, { Component } from 'react';
import Book from './Book';
import booksData from './data';
import '../App.css';
class BookList extends Component {
	state = {
		books: booksData
	};

	deleteItem = id => {
		const sortedBooks = this.state.books.filter(item => item.id !== id);
		this.setState({
			books: sortedBooks
		});
	};
	render() {
		return (
			<div>
				<h2 className="title">Best Selling Books this week</h2>
				{this.state.books.map(book => (
					<Book key={book.id} info={book} handleClick={this.handleClick} deleteItem={() => this.deleteItem(book.id)} />
				))}
			</div>
		);
	}
}

export default BookList;
