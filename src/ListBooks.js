import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf />
          </div>
        </div>
        <div className="open-search">
        <Link to='/search' className='add-book'>Add a book</Link>
    {/*      <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>*/}
        </div>
      </div>
    )
  }
}

export default ListBooks