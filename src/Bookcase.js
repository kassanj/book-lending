import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'
import Shelf from './Shelf'

class Bookcase extends Component {

  render() {

  	const { books } = this.props
  	var shelves = [];
    var lastShelf = null;

    this.props.books.forEach(function(book) {
      if (book.shelf !== lastShelf) {
        shelves.push(book.shelf);
      }
      lastShelf = book.shelf;
    });


 const mappedShelves = shelves.map((shelf, i) => {
    const filteredBooks = books.filter((book, i) => {
      return book.shelf === shelf
    });
    return <Shelf key={i} shelf={shelf} filteredBooks={filteredBooks} />
  })


    return (
      <div>{mappedShelves}</div>
    )
  }
}

export default Bookcase


