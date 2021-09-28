import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 15px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
    font-weight: 600;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }

  div{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: 24px;
  }
`;

