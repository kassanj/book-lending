import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'
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
    <MuiThemeProvider>
      <div className="app">
         <Route exact path='/' render={() => (
            <ListBooks 
              books={this.state.books} 
            />
        )}/>
        <Route path='/search' render={() => (
          <SearchBook 
            books={this.state.books} 
          />
        )}/>
      </div>
    </MuiThemeProvider>
    )
  }
}

export default BooksApp;
