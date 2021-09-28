import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;

  div{
    flex: 1;
  }

  .info, .buttons{
    display: flex;
    justify-content: space-between;
  }

  img{
    max-width: 200px;
    object-fit: cover;
    margin-left: 40px;
    margin-right: 40px;
  }
`;
