import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import SelectField from 'material-ui/SelectField';
import changeCase from 'change-case'
 

class Book extends Component {

  constructor(props) {
  	super(props);
  	this.state = { shelf: 'read' }
    this.handleChange = this.handleChange.bind(this);

  } 
  
  handleChange(e) {
  	const shelf = e.target.value;
  	this.props.onChange(shelf);
  }
  
	
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
		          <select onChange={this.handleChange}>
		            <option value="none" disabled>Move to...</option>
		            <option value={book.shelf}>{changeCase.sentenceCase(book.shelf)}</option>
		            {results.map(opt => (
						<option key={opt} value={opt}>{changeCase.sentenceCase(opt)}</option>
					))}
		          </select>
		        </div>
		      </div>
		       <h2>{book.shelf}</h2>
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