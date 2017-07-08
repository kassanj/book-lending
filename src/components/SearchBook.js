import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class SearchBooks extends Component {
  static propTypes = {
    updateBook: PropTypes.func.isRequired
  }

  state = { books: [], query: '' }

  searchBook = (query, maxResults) => {
    this.setState({query: query})

    if(query.trim() !== '') {
      BooksAPI.search(query, maxResults).then(books => this.setState({
        books: books
      }))
    } else {
      this.setState({
        books: []
      })
    }
  }

  render() {

  	const { searchBook, updateBook } = this.props

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
		            onChange={(event) => this.searchBook(event.target.value, 5)}
	        		/>
	          </div>
	        </div>
	        <div className="search-books-results">
	          <ol className="books-grid">
	          {this.state.books.map((book, id) => (
	          		<Book book={book} key={id} updateBook={updateBook}/>
          	))}
	         </ol>
	        </div>
    	</div>
    )
  }
}

export default SearchBooks