import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class SearchBooks extends Component {

  state = { books: [], currBooks: [] }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        const booksId = books.map(book => ({ id: book.id, shelf: book.shelf }))
        this.setState({ currBooks: booksId })
      })
  }

  searchBook = (query, maxResults) => {
    if(query.trim() !== '') {
      BooksAPI.search(query, maxResults).then(books => {
        if(!books || books.hasOwnProperty('error')) {
          this.setState({ books: [] })
        } else {
            this.setState({ books: books })
        }
       })
    } else {
      this.setState( { books: [] })
    }
  }

  bookUpdate = (book, shelf) => {
    if (book.shelf !== shelf) {
       BooksAPI.update(book, shelf).then(() => {
         book.shelf = shelf

         this.setState(state => ({
           books: state.books.filter(b => b.id !== book.id).concat([book])

         }))
       })
     }
  }

  render() {
      const { books, currBooks } = this.state
      let booksList

      if (books.length > 0) {
        booksList = books.map((book, index) => {
          currBooks.forEach(currbook => {
            if(currbook.id === book.id) {
              book.shelf = currbook.shelf
            }
          })

          return (
            <li key={index}>
              <Book
                bookUpdate={this.bookUpdate}
                book={book} />
            </li>
          )
        })
      } else {
        booksList = null
      }


    return (
   		<div className="search-books">
	        <div className="search-books-bar">
	         <Link to='/' className="close-search">Close</Link>
	          <div className="search-books-input-wrapper">
		           <input
		            className='search-contacts'
		            type='text'
		            placeholder='Search by title or author'
		            value={this.props.query}
		            onChange={(event) => this.searchBook(event.target.value, 5)}
	        		/>
	          </div>
	        </div>
	        <div className="search-books-results">
	          <ol className="books-grid">

	          {booksList}

	         </ol>
	        </div>
    	</div>
    )
  }
}

export default SearchBooks
