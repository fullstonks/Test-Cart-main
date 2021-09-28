import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 40px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100; //to be able to stand on other components
  right: 20px;
  top: 20px;
  background-color: lightgray;

  img{
    height: 40px;
  }
`;
