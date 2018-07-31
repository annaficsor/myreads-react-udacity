# Udacity FEND project: MyReads Project

Seventh project in Google-Udacity Scholarship 2018.

## Project Overview

In this project the main task was to create a bookshelf application that allows the user to select and categorize books that they have read, are currently reading, or want to read. For this project, I used React to build the app, and Udacity provided an API server and client library that I used to persist information as I interacted with the application.
Udacity provided also a starter code with static HTML for the main and the search page.

## App functionality

The main page displays a list of shelves, each of which contains a number of books:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets the user select the shelf for that book.
The main page has a link to the search page.

## Main requirements for this project:

- When the user selects a different shelf, the book should move there. The default value for the control should always be the current shelf the book is in.
- After the user reloads the site, the same information displays on the page.
- On the search page, the user can find books to add to the library.[The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.]
- The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets the user add the book to their library.
- When a book is on a bookshelf, it should have the same state on both the main application page and the search page.
- The search page also has a link to / (the root URL), which leads back to the main page.
- When the user navigates back to the main page from the search page, they should instantly see all of the selections they made on the search page in their library.

## How to open this app

- Fork this repository, and/or clone it to your local environment
- Install all project dependencies with npm install
- Start the server with npm start
