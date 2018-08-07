import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import SelectField from 'material-ui/SelectField';
import changeCase from 'change-case'

const shelves = ['currentlyReading', 'wantToRead', 'read', 'none' ];

const Book = (props) => (

 <li>
 	<div className="book">
    <div className="book-top">
    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${props.book.imageLinks !== undefined? props.book.imageLinks.thumbnail:''})` }}></div>
      <div className="book-shelf-changer">
      <select onChange={(event) => props.updateBook(props.book, event.target.value)}>
          <option value="none" disabled>Move to...</option>
          <option value={props.book.shelf}>{changeCase.sentenceCase(props.book.shelf)}</option>
          { shelves.filter( x => x !== props.book.shelf ).map(opt => (
      			<option key={opt} value={opt}>{changeCase.sentenceCase(opt)}</option>
      		))}
        </select>
      </div>
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">
        { props.book.authors !== undefined?
          props.book.authors.map( (value, i) => {
            return (
                <p>{value}</p>
            );
          })
        :''
      }</div>
  </div>
</li>
);
export default Book
