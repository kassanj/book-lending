import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'
// import sortBy from 'sort-by'

class SearchBooks extends Component {
	static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
  	const { books } = this.props

    return (      
   		<div className="search-books">
	        <div className="search-books-bar">
	          {/*<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>*/}
	           <Link to='/' className="close-search">Close</Link>
	          <div className="search-books-input-wrapper">
	            <input type="text" placeholder="Search by title or author"/>
	          </div>
	        </div>
	        <div className="search-books-results">
	          <ol className="books-grid">
	          {books.map((book) => (
	            <li key={book.id} className='search-list-item'>	           
							  <div className="book">
							      <div className="book-top">
							        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
							        <div className="book-shelf-changer">
							          <select>
							            <option value="none" disabled>Move to...</option>
							            <option value="currentlyReading">Currently Reading</option>
							            <option value="wantToRead">Want to Read</option>
							            <option value="read">Read</option>
							            <option value="none">None</option>
							          </select>
							        </div>
							      </div>
							      <div className="book-title">{book.title}</div>
							      <div className="book-authors">{book.authors}</div>
							    </div>
	            </li>
          	))}
	         </ol>
	        </div>
    	</div>
    )
  }
}

export default SearchBooks