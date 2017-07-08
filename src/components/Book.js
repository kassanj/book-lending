import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import SelectField from 'material-ui/SelectField';
import changeCase from 'change-case'
 

class Book extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }
	
  render() {

	const { book, updateBook } = this.props
	var changeCase = require('change-case');
	var shelves = ['currentlyReading', 'wantToRead', 'read', 'none' ];
	var results = shelves.filter( x => x !== book.shelf );

    return ( 
    	<li>     
		   	<div className="book">
		      <div className="book-top"> 
		      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url('${book.imageLinks.thumbnail}')` }}></div>
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
		      <div className="book-authors">{book.authors[0]}</div>		      
		       {/*<div className="book-authors">
				{book.authors.map(author => (
					<div key={author}>{author}</div>
				))}
		      </div>*/}
		    </div>
	    </li>
    )
  }
}

export default Book