import React, { Component } from 'react';
import MoreOptions from './MoreOptions'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import SelectField from 'material-ui/SelectField';
import changeCase from 'change-case'
 

class Book extends Component {

  render() {


	const { book } = this.props
	var changeCase = require('change-case');
	var shelves = ['currentlyReading', 'wantToRead', 'read', 'none' ];

	const results = shelves.filter( x => x !== book.shelf );


    return ( 
    	<li>     
		   	<div className="book">
		      <div className="book-top">
		      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
		        <div className="book-shelf-changer">
		          <select>
		            <option value="none" disabled>Move to...</option>
		            <option values={book.shelf}>{changeCase.sentenceCase(book.shelf)}</option>
		            {results.map(opt => (
						<option values={opt}>{changeCase.sentenceCase(opt)}</option>
					))}
		          </select>
		        </div>
		      </div>
		      <div className="book-title">{book.title}</div>
		      <div className="book-authors">
				{book.authors.map(author => (
					<div key={author}>{author}</div>
				))}
		      </div>
		    </div>
	    </li>
    )
  }
}

export default Book