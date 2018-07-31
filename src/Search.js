import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'


class Search extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
    onSearchBook: PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired
  }

  state = {
    query: [],
  }

  updateQuery = (query) => {
    this.setState({ query },
      () => {
        if (this.state.query.length >= 1) {
          this.props.onSearchBook(this.state.query);
        }
      }
    )
  }

  render() {
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link onClick={this.props.onDelete} className='close-search' to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          <input autoFocus
          type="text"
          placeholder="Search by title or author"
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
      </div>

      {this.state.query  && (
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.results.length >= 1 && (
              this.props.results.map(book => (
                <Book
                book={book}
                key={book.id}
                onUpdateShelf = {this.props.onUpdateShelf}
                />
              ))
            )}

            {this.props.err==='true'  && (
              <li>No results</li>
            )}
          </ol>
        </div>
      )}
      </div>
    )
  }
}

export default Search;
