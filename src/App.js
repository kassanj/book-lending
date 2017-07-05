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
  updateBook(shelf, book) {
    BooksAPI.update(book).then(book => {
      this.setState(state => ({
        books: state.books.update([ book ])
      }))
    })
  }  
  render() {
    return (
    <MuiThemeProvider>
      <div className="app">
         <Route exact path='/' render={() => (
            <ListBooks 
              books={this.state.books} 
              onUpdateBook={(shelf, book) => {
                this.updateBook(shelf, book)
              }}
            />
        )}/>
        <Route path='/search' render={() => (
          <SearchBook 
            books={this.state.books} 
            onUpdateBook={(shelf, book) => {
              this.updateBook(shelf, book)
            }}
          />
        )}/>
      </div>
    </MuiThemeProvider>
    )
  }
}

export default BooksApp;
