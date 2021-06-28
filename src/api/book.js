import axios from 'axios';

export const getBooks = async () => {
  const {
    data: {
      results: { books },
    },
  } = await axios.get(
    'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kejAhwRat3GkPqI4tLiCaU2AHSzzfwYu'
  );

  return books;
};
