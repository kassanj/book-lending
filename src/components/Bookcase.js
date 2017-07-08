import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'
import Shelf from './Shelf'

class Bookcase extends Component {

  static propTypes = {
    book: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }

  render() {

  	const { books, updateBook, shelves } = this.props

    const mappedShelves = shelves.map((shelf, i) => {
      const filteredBooks = books.filter((book, i) => {
        return book.shelf === shelf
      });
      return <Shelf key={i} shelf={shelf} filteredBooks={filteredBooks} updateBook={updateBook}  />
    })


    return (
      <div>{mappedShelves}</div>
    )
  }
}

export default Bookcase


