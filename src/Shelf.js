import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class Shelf extends Component {

  render() {

		// const { shelf } = this.props
		// const { book } = this.props

    return (
    	<div className="bookshelf">
	      <h2 className="bookshelf-title">{this.props.shelf}</h2>
	      	<div className="bookshelf-books">
	        <ol className="books-grid">
	        
			         {/* <Book book={book} key={book.title} />	*/}
        
	        </ol>
	      </div>
	    </div>
    ); 
  }
}

export default Shelf	


