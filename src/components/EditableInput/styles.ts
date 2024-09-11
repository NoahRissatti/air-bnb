import styled from 'styled-components'

export const Container = styled.div``

export const StyledInput = styled.input`
  font-size: 95px;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 0;
  outline: none;
  min-width: 400px;
  max-width: 600px;
  box-sizing: border-box;

  &:focus {
    border-bottom: 2px solid #000;
  }
`;