import { useState } from "react";

const SearchBar = ({handleSearchBooks}) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleChange = (event) => {
    setSearchValue(event.target.value);
    handleSearchBooks(searchValue);
  }

  return (
    <div className="search-books-bar">
      <a className="close-search" href="index.html">Close</a>
      <div className="search-books-input-wrapper">
        <input onChange={handleChange} type="text" placeholder="Search by title or author" value={searchValue}/>
      </div>
    </div>
  );
}

export default SearchBar