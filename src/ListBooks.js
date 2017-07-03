import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {

  render() {
    const { books } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf books={ books } />
          </div>
        </div>
        <div className="open-search">
        <Link to='/search' className='add-book'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks