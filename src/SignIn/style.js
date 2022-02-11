
import styled from "styled-components"
import { Link } from 'react-router-dom'

const Container = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

`

const Dados = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 25px;
    gap: 12px;
`
const StyledLink = styled(Link)`
    
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;

`;
const Button = styled.button`
    height: 45px;
    width: 300px;
    background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#A328D6" : "#888"};
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 700;
    padding: 14px;
    ${(props) => !props.noMargin && "margin-bottom: 10px;"}
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;

const AlignButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    margin-bottom: 12px;
    height: 45px;
    width: 300px;
    border: 1px solid #D4D4D4;
    background-color: #FFFFFF;
    color: black;
    padding: 14px;
    border-radius: 4px;
    ::placeholder {
        color: black;
        font-size: 20px;
    }
`;


export {
    Dados,
    StyledLink,
    Button,
    Input,
    AlignButton,
    Container


}