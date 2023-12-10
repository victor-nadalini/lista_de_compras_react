import styled from "styled-components";

export const AddButton = styled.button `
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left:10px; 

  &:hover {
    background-color: #2980b9;
  }
`;

export const Conteiner = styled.div `
  background: #fff;
  padding:20px;
  border-radius:10px;

  input {
    height: 35px; 
    border-radius:5px; 
    margin-top:30px; 
    outline:none; 
    padding-left: 10px;
    cursor: pointer;
  }
`;

export const Produt = styled.div `
display: flex;
justify-content: space-between;
height: 40px;
align-items: center;
background-color: #dfdfdf;
border-radius: 5px;
margin-top: 15px;
padding: 0 10px;

p{
    text-transform: capitalize;
    font-weight: bold;
}
`

export const trashButton = styled.button `
background-color: transparent;
border: none;
cursor: pointer;
font-size: 20px;
`