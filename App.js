import React, { Component } from 'react';
import './App.css';
import PersonList from './Component/PersonList';
import BookList from './Component/Booklist';

// const Person = ({ img, name, occupation, children }) => {
//   const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
//   return (
//     <div className="person">
//       <img src={url} alt="person img" />
//       <div>
//         <h4>{name}</h4>
//         <h4>{occupation}</h4>
//         {children}
//       </div>
//     </div>
//   );
// };
// const PersonList = () => {
//   return (
//     <section>
//       <Person img="34" name="john" occupation="developer" />
//       <Person img="22" name="bob" occupation="designer">
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
//           accusamus?
//         </p>
//       </Person>
//       <Person img="56" name="david" occupation="the boss" />
//     </section>
//   );
// };

class App extends Component {
	render() {
		return (
			<div>
				<PersonList />
				<BookList />
			</div>
		);
	}
}

export default App;
