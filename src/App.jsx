import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Book from './components/Book';
import Bookshelf from './components/Bookshelf';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { getAllBooks, updateBookShelf, searchBooks } from './services/booksApi';
import { Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {

  const [searchResults, setSearchResults] = useState([])

  const handleSearchBooks = async(query) => {
    const newResults = await searchBooks(query)
    setSearchResults(await newResults);
  }

  return (
    <>
    <Router>
    
      <Routes>
      
        <Route
        path="/"
        element={
          <div id="root">
          <div className="app">
          <div className="list-books">
            <div className="list-books-title"><h1>MITTReads</h1></div>
            <div className="list-books-content">
              <div>
              <Bookshelf title={"Currently Reading"}/>
              <Bookshelf title={"Want To Read"}/>
              <Bookshelf title={"Read"}/>
              </div>
            </div>
            <div className="open-search"> <Link to="/search">Add a book</Link> </div>
          </div>
          </div>
          </div>
        }
        />
        <Route
          path="/search"
          element={
            <div id="root">
              <div className="app">
                <SearchBar handleSearchBooks={handleSearchBooks}/>
                <SearchResults results={searchResults}/>
              </div>
            </div>
          }
          />
          
      </Routes>
      
    </Router>
    </>
  );
}

export default App;
