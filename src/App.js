/* eslint-disable max-len*/
import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>
        Contacts list!
      </h1>
        <SearchBar />
        <ContactList />
      </div>
    );
  }
}

export default App;
