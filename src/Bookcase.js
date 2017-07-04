import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'
import Shelf from './Shelf'

class Bookcase extends Component {

  render() {

  	const { books } = this.props
    const filteredBooks = [];
  	const shelves = [];
    var lastShelf = null;

    this.props.books.forEach(function(book) {
      if (book.shelf !== lastShelf) {
        shelves.push(book.shelf);
      }
      lastShelf = book.shelf;
    });


    shelves.map((shelf, i) => {
        const filteredBooks = books.filter((book, i) => {
            return book.shelf === shelf
            console.log(filteredBooks);
        }); 
        console.log(<Shelf books={ shelf, filteredBooks } />)
     })

    return (
      <div><Shelf books={ filteredBooks } /></div>
    )
  }
}

export default Bookcase


