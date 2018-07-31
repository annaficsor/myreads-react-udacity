import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import MyBooks from './MyBooks'
import Search from './Search'


class App extends React.Component {
  state = {
    books: [],
    results:[],
    err:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }

  updateShelf(book, shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(bPrev => bPrev.id !== book.id).concat([book])
        }))
      })
    }

  searchBook(query) {
    BooksAPI.search(query).then((books) => {
      if (books.error === "empty query") {
        this.setState({
          results: [],
          err:'true' });
      } else if (!books.error) {
          books.map((book) => {
            book.shelf='none';
            this.state.books.filter(b => b.id === book.id)
            .map(b => book.shelf = b.shelf);
            this.setState({ results: books})
          })
        }
      })
    }

  delete() {
    this.setState({ results: [], err: [] })
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
             <div className="list-books-title">
               <h1>ANNAs READING LIST</h1>
             </div>
             <MyBooks
               books = {this.state.books}
               onUpdateShelf = {(id, shelf) => {
                 this.updateShelf(id, shelf);
               }}
             />
          </div>
        )}/>
        <Route path ='/search' render={() => (
          <Search
            results = {this.state.results}
            books = {this.state.books}
            onUpdateShelf = {(id, shelf) => {
              this.updateShelf(id, shelf)
            }}
            onSearchBook = {(query) => {
              this.searchBook(query)
            }}
            onDelete = {() => {
              this.delete()}}
            err={this.state.err}
          />
        )}/>
      </div>
    )
  }
}

export default App;
