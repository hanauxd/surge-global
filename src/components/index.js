import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Root = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  height: 100%;

  @media (max-width: 475px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  padding-bottom: 2rem;

  @media (max-width: 475px) {
    font-size: 1.5rem;
    padding-bottom: 1rem;
    text-align: center;
  }
`;

const Label = styled.h3`
  @media (max-width: 475px) {
    font-size: 1.2rem;
  }
`;

const InformationLabel = styled(Label)`
  text-align: center;
`;

const BookList = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookItem = styled.div`
  display: flex;
  padding: 1.5rem 0;
  border-bottom: 1px solid #cccccc;

  @media (max-width: 475px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;

  span {
    font-weight: 600;
  }

  @media (max-width: 475px) {
    padding-top: 1rem;
    padding-left: 0;
    align-items: center;
  }
`;

const BookImage = styled.img`
  height: 150px;

  @media (max-width: 475px) {
    height: auto;
    width: 150px;
  }
`;

const ReviewButton = styled(Button)`
  width: fit-content;
`;

export {
  Root,
  Title,
  Label,
  InformationLabel,
  BookList,
  BookItem,
  BookDetails,
  BookImage,
  ReviewButton,
};
