import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import './App.css';

class BooksApp extends Component {
    state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }  
  render() {
    return (
      <div className="app">
        <ListBooks books={this.state.books} />
        <SearchBook books={this.state.books} />
      </div>
    );
  }
}

export default BooksApp;
