import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class SearchBooks extends Component {
	static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired,
    searchBook: PropTypes.func.isRequired
  }

  render() {
  	const { searchBook, updateBook, books } = this.props
  	
    return (      
   		<div className="search-books">
	        <div className="search-books-bar">
	           <Link to='/' className="close-search">Close</Link>
	          <div className="search-books-input-wrapper">
		           <input
		            className='search-contacts'
		            type='text'
		            placeholder='Search by title or author'
		            value={this.props.query}
		            onChange={(event) => this.props.searchBook(event.target.value, this.props.maxResults)}
	        		/>
	          </div>
	        </div>
	        <div className="search-books-results">
	          <ol className="books-grid">
	          {books.map((book, id) => (
	          		<Book book={book} key={id} updateBook={updateBook}/>
          	))}
	         </ol>
	        </div>
    	</div>
    )
  }
}

export default SearchBooks