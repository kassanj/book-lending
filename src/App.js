import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BookList from './components/ListBooks'
import BookSearch from './components/SearchBook'

import './App.css';

class BooksApp extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className="app">
        <Route exact path='/' component={BookList} />
        <Route path='/search' component={BookSearch} />
      </div>
    </MuiThemeProvider>
    )
  }
}

export default BooksApp;
