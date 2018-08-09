import React, { Component } from 'react';
import * as BooksAPI from '../utils/BooksAPI'

import Shelf from './Shelf'

class BookCase extends Component {

  state = {
      books: []
  }

  componentDidMount() {
      BooksAPI.getAll().then(books => {
          this.setState({
              books: books
          })
      })
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
     const { books } = this.state

     let currentList = [];
     let wantList = [];
     let readList = [];

     books.forEach(book => {
         switch(book.shelf) {
             case 'currentlyReading':
                 currentList.push(book)
                 break
             case 'wantToRead':
                 wantList.push(book)
                 break
             case 'read':
                 readList.push(book)
                 break
             default:
                 break
         }
     })

     const shelves = [
         {
             name: 'Currently Reading',
             books : currentList
         },
         {
             name: 'Want To Read',
             books : wantList
         },
         {
             name: 'Read',
             books : readList
         }
     ]

    return (
      <div className="list-books-content">
        <div>{ shelves.map( (shelf, index) => (
              <Shelf
                  key={index}
                  title={shelf.name}
                  books={shelf.books}
                  bookUpdate={this.bookUpdate} />
          ) ) }</div>
      </div>
    )
  }
}

export default BookCase
