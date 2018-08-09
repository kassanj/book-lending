import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import changeCase from 'change-case'

import Book from './Book'

class Shelf extends Component {

    render() {
        const { title, books, bookUpdate } = this.props
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{changeCase.sentenceCase(title)}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, index) => (
                            <Book
                                key={index}
                                book={book}
                                bookUpdate={bookUpdate} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    bookUpdate: PropTypes.func.isRequired
}

export default Shelf
