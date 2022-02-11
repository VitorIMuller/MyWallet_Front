import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Button, Buttons, Resgisters, Historic, TopBar, LogOut, Container, Register, Date, Description, Value, Cash, Saldo, Money } from "./style"
import logOut from "../assets/Vector.png"
import UserContext from "../Context/UserContext"
import axios from 'axios'


function HomePage() {
    const { user } = useContext(UserContext)
    const [historic, setHistoric] = useState([])
    const [isDeposit, setIsDeposit] = useState(false)
    const [total, setTotal] = useState(0);
    const [isPositive, setIsPositive] = useState(true)
    let deposit = [];
    let conta;

    function getHistoric() {

        const header = {
            headers: {
                "authorization": `Bearer ${user.token}`
            }
        }

        console.log(header)
        const promise = axios.get("http://localhost:5000/historic", header)
        promise.then((response) => {
            setHistoric(response.data)
            depositReturn(response.data);
            saldo(response.data);
        })
        promise.catch((error) => {
            alert(error)
        })
    }
    useEffect((getHistoric), [])


    function depositReturn(historic) {
        deposit = historic.filter((value) => {
            if (value.type == 'deposit') {
                return value;
            }
        }
        );
    }

    function saldo(deposit) {

        deposit.forEach(element => {
            if (element.type == "deposit") {
                conta = total + parseFloat(element.value)
                setTotal(conta)
            } else {
                conta = total - parseFloat(element.value)
                setTotal(conta)
            }
        });
    }

    return (
        <Container>
            <TopBar>
                <p>Olá, {user.name}</p>
                <LogOut to="/"><img src={logOut} /></LogOut>
            </TopBar>
            {historic.length === 0 ?
                <Resgisters>
                    <p>Não há registros de <br></br>entrada ou saída</p>
                </Resgisters>
                :
                <>
                    <Historic>
                        {historic.map(function (hist) {
                            return (
                                <Register>
                                    <Date>{hist.date}</Date>
                                    <Description>{hist.description}</Description>
                                    <Value isDeposit={hist.type}>{hist.value}</Value>
                                </Register>
                            )
                        })}
                        <Cash><Saldo>Saldo:</Saldo> <Money isPositive={isPositive}>{total}</Money></Cash>
                    </Historic>
                </>
            }

            <Buttons>
                <Button to="/cashin">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova <br /> entrada</p>
                </Button>
                <Button to="/cashout">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p> Nova <br /> Saída</p>
                </Button>
            </Buttons>

        </Container>
    )
} export default HomePage



