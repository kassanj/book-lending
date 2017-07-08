import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import SelectField from 'material-ui/SelectField';
import changeCase from 'change-case'
 

class Book extends Component {

	static defaultProps = {
        books: {
            authors: [],
            imageLinks: {
            	thumbnail: "http://placehold.it/200x200"
            }
        }
    };

  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }
	
  render() {

	const { book, updateBook } = this.props
	var changeCase = require('change-case');
	var shelves = ['currentlyReading', 'wantToRead', 'read', 'none' ];
	var results = shelves.filter( x => x !== book.shelf );

	var values = book.authors !== undefined?
	  book.authors.map( function(value, i){
		return (
		  <p>{value}</p>
		);
	})
	:'';

    return ( 
    	<li>     
		   	<div className="book">
		      <div className="book-top"> 
		      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks !== undefined? book.imageLinks.thumbnail:''})` }}></div>
		        <div className="book-shelf-changer">
		        <select onChange={(event) => updateBook(book, event.target.value)}>
		            <option value="none" disabled>Move to...</option>
		            <option value={book.shelf}>{changeCase.sentenceCase(book.shelf)}</option>
		            {results.map(opt => (
						<option key={opt} value={opt}>{changeCase.sentenceCase(opt)}</option>
					))}
		          </select>
		        </div>
		      </div>
		      <div className="book-title">{book.title}</div>
		      <div className="book-authors">{values}</div>
		    </div>
	    </li>
    )
  }
}

export default Book