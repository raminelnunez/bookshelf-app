const Book = ({props, select}) => {
  const handleChange = () => {

  }
  try {
    const {title, authors, imageLinks} = props;
    const BookStyle = {
      width: "128px",
      height: "193px",
      backgroundImage: `url(${imageLinks.thumbnail})`
    }
    return (
      <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={BookStyle}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={handleChange}>
            <option value="move" disabled="">Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors.map((author) =>
          `${author}, `
        )}
      </div>
    </div>
    );
  }
  catch {
  }
}

export default Book