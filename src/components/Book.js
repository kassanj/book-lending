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

      <select onChange={(e) => props.bookUpdate(props.book, e.target.value)} value={props.book.shelf ? props.book.shelf : 'none'}>
          <option value="moveTo" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
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
