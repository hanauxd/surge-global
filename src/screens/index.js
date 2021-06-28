import React, { useEffect } from 'react';
import { useSetState } from 'react-use';

import { getBooks } from '../api/book';
import Book from '../components/Book';
import { Root, Title, InformationLabel, BookList } from '../components';

const Home = () => {
  const [{ books, loading, error }, setState] = useSetState({
    books: [],
    loading: true,
    error: '',
  });

  const fetchBooks = async () => {
    try {
      const books = await getBooks();
      setState({ books });
    } catch (error) {
      setState({ error: 'Oops! Something went wrong. Please try again.' });
    }

    setState({ loading: false });
  };

  useEffect(() => {
    fetchBooks();

    //eslint-disable-next-line
  }, []);

  const renderLoading = () => {
    return (
      <InformationLabel className='text-muted'>Loading...</InformationLabel>
    );
  };

  const renderError = () => {
    return <InformationLabel className='text-danger'>{error}</InformationLabel>;
  };

  const renderBookList = () => {
    return (
      <>
        <Title>NYTimes Best Sellers - Hardcover Fiction</Title>
        <BookList>
          {books.map(
            (
              {
                rank,
                title,
                book_image,
                author,
                description,
                book_review_link,
              },
              index
            ) => (
              <Book
                key={index}
                rank={rank}
                title={title}
                image={book_image}
                author={author}
                description={description}
                reviewLink={book_review_link}
              />
            )
          )}
        </BookList>
      </>
    );
  };

  return (
    <Root>
      {loading && renderLoading()}
      {error && renderError()}
      {!loading && !error && renderBookList()}
    </Root>
  );
};

export default Home;
