import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonWrapper = styled.button`
  margin: 5px;
  padding: 8px 20px;
  border: 1px solid transparent;
  overflow: hidden;
  font: inherit;
  color: black;
  font-weight: 400px;
  font-size: 1rem;
  background-color: transparent;
  text-transform: none;
  text-decoration: none;
  text-align: left;
  white-space: nowrap;
  max-width: 100%;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  transition: color .20s ease-in-out, background-color .20s ease-in-out, border-color .20s ease-in-out;

  background: ${props => props.backgroundColor};
  color: ${props => props.color};
  border-color: ${props => darken(0.2, props.backgroundColor)};

  :hover,
  :focus,
  :active {
    background-color: ${props => darken(0.1, props.backgroundColor)};
    color: ${props => props.color};
  }
`;
