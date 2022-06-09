import Book from "./Book";

const SearchResults = ({results, updateBook}) => {
  try {
  return (
    <div className="search-books-results">
      <div className="results-quantity">Your search returned {results.length} results.</div>
      <ol className="books-grid">
        {results.map((result) =>
          <li>
            <Book props={result} updateBook={updateBook}/>
          </li>
        )}
      </ol>
    </div>
  );
} catch {

}
}

export default SearchResults