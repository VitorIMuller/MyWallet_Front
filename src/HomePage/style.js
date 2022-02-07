import styled from "styled-components"
import { Link } from "react-router-dom"


const Container = styled.div`
    background-color: #8C11BE;
    margin: 0 auto;
    width: 326px;


`
const LogOut = styled(Link)`
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

const Resgisters = styled.div`
    width: 100%;
    height: 446px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: #868686;

    `

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 15px;
`
const Button = styled(Link)`
    width: 135px;
    height: 94px;

    border-radius: 5px;

    background-color: #A328D6;

    display: flex;

    flex-direction: column;
    justify-content: space-between;

    padding: 10px;

    font-size: 17px;
    font-weight: 700;
    color: #FFFF;

    & ion-icon{
        width: 25px;
        height: 25px;
    }
    
`

const Register = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    width: 100%;
    height: 30px;
`

const Date = styled.div`
    color: #C6C6C6;
    font-size: 16px;
    position: absolute;
    left: 5px;

    width: 40px;
`
const Description = styled.div`
    color: #000000;
    font-size: 16px;
    position: absolute;
    left: 60px;
    width: 40px;
`

const Value = styled.div`
    color: ${props => props.isDeposit == "deposit" ? '#03AC00' : '#DE3131'};
    font-size: 16px;
    position: absolute;
    right: 10px;

    width: 40px;
`
const Historic = styled.div`
    width: 100%;
    height: 446px;
    border-radius: 8px;
    background-color: white; 
    position: relative;

    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: #868686;

`
const Cash = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    

    position: absolute;
    left: 5px;
    bottom: 5px;


`
const Saldo = styled.div`
    font-size: 17px;
    color: black;
    font-weight: 700;

`

const Money = styled.div`
font-size: 17px;
color: #03AC00;
font-weight: 400;
margin-right: 5px;

`

export {
    Button,
    Buttons,
    Resgisters,
    TopBar,
    LogOut,
    Container,
    Register,
    Date,
    Description,
    Value,
    Historic,
    Cash,
    Saldo,
    Money
}