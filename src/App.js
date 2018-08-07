import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListBooks from './components/ListBooks'
import SearchBook from './components/SearchBook'
import * as BooksAPI from './utils/BooksAPI'
import './App.css';

class BooksApp extends Component {
  constructor(props) {
    super(props);

    this.state = { books: [] }
    this.updateBook = this.updateBook.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBook(book, shelf) {
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf

        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])

        }))
      })
    }
  }

  // searchBook(query, maxResults) { console.log('query', query); console.log('maxResults', maxResults); }
  // updateBook(book, shelf) { console.log('book', book); console.log('shelf', shelf); }

  render() {
    return (
    <MuiThemeProvider>
      <div className="app">
         <Route exact path='/' render={() => (
            <ListBooks
              books={this.state.books}
              updateBook={this.updateBook}
            />
        )}/>
        <Route path='/search' render={() => (
          <SearchBook
            searchBook={this.searchBook}
            updateBook={this.updateBook}
          />
        )}/>
      </div>
    </MuiThemeProvider>
    )
  }
}

export default BooksApp;
