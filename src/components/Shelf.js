import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import changeCase from 'change-case'
import Book from './Book'

class Shelf extends Component {


  render() {

  	var changeCase = require('change-case');
	const { filteredBooks, shelf, updateBook } = this.props

    return (
    	<div className="bookshelf">
	      <h2 className="bookshelf-title">{changeCase.sentenceCase(this.props.shelf)}</h2>
	      	<div className="bookshelf-books">
	        <ol className="books-grid">
	     		{this.props.filteredBooks.map(function(book, i){
        			return <Book book={book} key={i} updateBook={updateBook} />;
    			})}
	        </ol>
	      </div>
	    </div>
    ); 
  }
}

export default Shelf	


