import styled from 'styled-components';
import { styles } from './style.interface';

export const Button = styled.button<styles>`

  text-align: center;
  /* width: 5rem; */
  font-size: 2rem;
  height: 4rem;
  margin: 0 1rem;
  color: white;
  /* background-color: gray; */
  border: none;
  /* border-radius: 5px; */
  cursor: pointer;
  border-radius: 50px;

  text-decoration: none;
  margin: 0 1rem;
  padding: 0.5rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1),
    -4px -4px 6px rgba(255, 255, 255, 1);
  /* border-radius: 10px; */
  font-family: "Montserrat";
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: dimgray;

  &:hover {
    transform: scale(1.05);
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1),
      -4px -4px 10px rgba(255, 255, 255, 1);
  }

  &:hover,
  &:focus {
    color: orangered;
  }

`;
