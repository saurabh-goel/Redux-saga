import styled from 'styled-components';

const Button = styled.button`
  padding: 0.25em 1em;
  margin:  2em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  font-size: ${props => (props.primary ? '2em' : '1em')};
  border-radius: ${props => (props.round ? '4em' : '1px')};
`;
export default Button;
