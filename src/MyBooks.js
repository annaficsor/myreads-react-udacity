import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class MyBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  }

  render() {
    const shelfNames = ['Currently reading', 'Want to read', 'Finished books'];
    const shelf = ['currentlyReading', 'wantToRead', 'read'];

    return (
      <div className="list-books-content">
      <div>
        {shelfNames.map((shelfs, index) => (
          <div key={shelfs[index]} className="bookshelf">
            <h2 className={`bookshelf-title ${shelf[index]}`}>{shelfs}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.props.books
                .filter(book => book.shelf === shelf[index])
                .map(book => (
                  <Book
                  book={book}
                  key={book.id}
                  onUpdateShelf = {this.props.onUpdateShelf}
                  />
                ))
              }
              </ol>
            </div>
          </div>
        ))}
      </div>

      <div className="open-search">
        <Link
          to='/search'
        >Add Contact</Link>
      </div>
      </div>
    )
  }
}

export default MyBooks;
