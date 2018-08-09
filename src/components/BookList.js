import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton';

import BookCase from './BookCase'
import Title from './Title'
import AddBook from './AddBook'

const BookList = () => {
    return (
      <div className="list-books">
        <Title />
        <BookCase />
        <AddBook />
      </div>
    )
}

export default BookList
