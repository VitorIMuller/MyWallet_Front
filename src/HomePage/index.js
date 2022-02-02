import { useState } from "react"
import styled from "styled-components"
import logOut from "../assets/Vector.png"

function HomePage() {

    return (
        <Container>
            <TopBar>
                <p>Olá, Fulano</p>
                <img src={logOut} />
            </TopBar>
            <Resgisters>
                <p>Não há registros de <br></br>entrada ou saída</p>
            </Resgisters>
            <Buttons>
                <Button>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova <br /> entrada</p>
                </Button>
                <Button>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p> Nova <br /> Saída</p>
                </Button>
            </Buttons>

        </Container>
    )
} export default HomePage


const Container = styled.div`
    background-color: #8C11BE;
    margin: 0 auto;
    width: 326px;


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
const Button = styled.div`
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
    
 ;

`
