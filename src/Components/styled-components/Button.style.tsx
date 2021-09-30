import styled from 'styled-components';
import { styles } from './style.interface';

export const Button = styled.button<styles>`
  color: white;
  font-size: 2rem;
  width  : 5rem;
  height: 3rem;
  background-color: lightblue;  
  outline  : none ;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: ${(props: styles) => props['background-color'] ?? 'green'};
  :hover{
      background-color: ${(props: styles) => props['background-color'] ?? 'green'};
  }
`;
