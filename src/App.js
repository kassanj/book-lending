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

  // state = {
  //   books: []
  // }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  // updateBook(book, shelf) {
  //   BooksAPI.update(book, shelf).then(book => {
  //     this.setState(state => ({
  //       books: state.books.concat([ book ])
  //     }))
  //   })
  // }
  updateBook(newShelf) {
    this.setState({
      shelf: newShelf
    });
  }


  render() {
    return (
    <MuiThemeProvider>
      <div className="app">
         <Route exact path='/' render={() => (
            <ListBooks 
              books={this.state.books} 
              onChange={this.updateBook}
            />
        )}/>
        <Route path='/search' render={() => (
          <SearchBook 
            books={this.state.books} 
            onChange={this.updateBook}
          />
        )}/>
      </div>
    </MuiThemeProvider>
    )
  }
}

export default BooksApp;
