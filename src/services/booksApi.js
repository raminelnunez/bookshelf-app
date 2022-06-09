export const updateBookShelf = async (id, shelf) => {
  const response = await fetch(`http://localhost:3000/books/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({shelf: shelf})
  });
  const result = await response.json();
  return result;
};

export const getAllBooks = async () => {
  const response = await fetch(`http://localhost:3010/books`);
  const result = await response.json();
  return result;
}

export const searchBooks = async (query) => {
  query.replace(/ /g, "&20");
  const request = await fetch(`http://localhost:3010/books?q=${query}`);
  const response = await request.json();
  const result = await response;
  return result;
}
