import styled from "styled-components";

const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
`

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
    height: 30px;
    width: 270px;
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

const Dados = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 25px;
    gap: 12px;
`

const TopBar = styled.div`
    width: 100%;
    height: 60px;
    background-color: #8C11BE;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 26px;
    font-weight: 700;
    color: white;
`

export {
    Container,
    Button,
    AlignButton,
    Dados,
    TopBar,
    Input

}