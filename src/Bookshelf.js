import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
import Book from './Book'

class Bookshelf extends Component {

  render() {
    return (      
	    <div className="bookshelf">
	      <h2 className="bookshelf-title">Read</h2>
	      <div className="bookshelf-books">
	        <ol className="books-grid">
	          <li>
	          	<Book />
	          </li>
	        </ol>
	      </div>
	    </div>
    )
  }
}

export default Bookshelf


