import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {

  render() {

  	const { books } = this.props

    return (      
	    <div className="bookshelf">
	      <h2 className="bookshelf-title">Read</h2>
	      <div className="bookshelf-books">
	        <ol className="books-grid">
	           {books.map((book) => (
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

export default Bookshelf


