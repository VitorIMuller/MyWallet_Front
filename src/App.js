import { BrowserRouter, Routes, Route } from "react-router-dom"
import CashIn from "./CashIn"
import CashOut from "./Cashout"
import HomePage from "./HomePage"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import UserContext from "./Context/UserContext"
import { useState } from "react"


function App() {
    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{
            user, setUser
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/cashin" element={<CashIn />} />
                    <Route path="/cashout" element={<CashOut />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>


    )
} export default App