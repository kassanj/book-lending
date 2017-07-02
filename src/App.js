import React, { Component } from 'react';
import { Route } from 'react-router-dom'
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
     <Route exact path='/' render={() => (
        <ListBooks books={this.state.books} />
      )}/>
      <Route path='/search' render={() => (
        <SearchBook books={this.state.books} />
      )}/>
      </div>
    );
  }
}

export default BooksApp;
