import React from 'react';
import { number, string } from 'prop-types';
import { BookItem, BookDetails, BookImage, ReviewButton, Label } from '.';

const Book = ({ rank, title, image, author, description, reviewLink }) => {
  return (
    <BookItem>
      <BookImage src={image} alt={title} />
      <BookDetails>
        <Label>{`#${rank} ${title}`}</Label>
        <span className='text-muted'>{author}</span>
        <span className='py-2'>{description}</span>
        {reviewLink && (
          <ReviewButton type='button' variant='dark' size='sm'>
            Read Full Review
          </ReviewButton>
        )}
      </BookDetails>
    </BookItem>
  );
};

Book.propTypes = {
  rank: number.isRequired,
  title: string.isRequired,
  image: string.isRequired,
  author: string.isRequired,
  description: string.isRequired,
  reviewLink: string,
};

Book.defaultProps = {
  reviewLink: '',
};

export default Book;
