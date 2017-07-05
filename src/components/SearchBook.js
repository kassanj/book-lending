import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class SearchBooks extends Component {
	static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query })
  }

  render() {
  	const { books } = this.props
  	const { query } = this.state

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((books) => match.test(books.title) || match.test(books.authors))
    } else {
      showingBooks = books
    }

    return (      
   		<div className="search-books">
	        <div className="search-books-bar">
	           <Link to='/' className="close-search">Close</Link>
	          <div className="search-books-input-wrapper">
		           <input
		            className='search-contacts'
		            type='text'
		            placeholder='Search by title or author'
		            value={query}
		            onChange={(event) => this.updateQuery(event.target.value)}
	        		/>
	          </div>
	        </div>
	        <div className="search-books-results">
	          <ol className="books-grid">
	          {showingBooks.map((book) => (
	          	<li>
	          		<Book book={book} key={book.title} />
	          	</li>
          	))}
	         </ol>
	        </div>
    	</div>
    )
  }
}

export default SearchBooks