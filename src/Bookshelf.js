import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'
import Shelf from './Shelf'

class Bookcase extends Component {

  render() {

  	const { books } = this.props

  	var collection = [];
  	var shelf = [];
    var lastShelf = null;

    this.props.books.forEach(function(book) {
      if (book.shelf !== lastShelf) {
        shelf.push(<Shelf shelf={book.shelf} array={collection} key={book.shelf} />);
      }
      if (book.shelf == )
      collection.push(<Book book={book} key={book.title} />);
      lastShelf = book.shelf;
    });

    return (  
	    <div>{shelf}</div>
    )   
  }
}

export default Bookcase


