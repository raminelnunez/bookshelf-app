import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Book from './components/Book';
import BookShelf from './components/BookShelf';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { updateBookShelf, searchBooks, getBooksByShelf } from './services/booksApi';
import { Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);
  const [handledBookShelf, setHandledBookShelf] = useState(false)

  const handleSearchBooks = async(query) => {
    const newResults = await searchBooks(query)
    setSearchResults(await newResults);
  }

  const handleUpdateBook = (id, shelf) => {
    updateBookShelf(id, shelf);
    handleBookShelf();
  }

  const handleGetBooksByShelf = async (shelf) => {
    const Shelf = await getBooksByShelf(shelf);
    return await Shelf;
  }

  const handleBookShelf = async () => {
    const newCurrentlyReading = await handleGetBooksByShelf("currentlyReading");
    const newWantToRead = await handleGetBooksByShelf("wantToRead");
    const newRead = await handleGetBooksByShelf("read");

    setCurrentlyReading(await newCurrentlyReading);
    setWantToRead(await newWantToRead);
    setRead(await newRead);
  }

  if (handledBookShelf === false) {
    handleBookShelf();
    setHandledBookShelf(true);
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
              <BookShelf title={"Currently Reading"} books={currentlyReading} updateBook={handleUpdateBook}/>
              <BookShelf title={"Want To Read"} books={wantToRead} updateBook={handleUpdateBook}/>
              <BookShelf title={"Read"} books={read} updateBook={handleUpdateBook}/>
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
                <SearchResults results={searchResults} updateBook={handleUpdateBook}/>
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
