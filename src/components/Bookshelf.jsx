import Book from "./Book";

const Bookshelf = ({title, books, updateBook}) => {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => {
            <li>
              <Book props={book} updateBook={updateBook}/>
            </li>
          })}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf