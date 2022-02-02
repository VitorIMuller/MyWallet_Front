import { BrowserRouter, Routes, Route } from "react-router-dom"
import CashIn from "./CashIn"
import CashOut from "./Cashout"
import HomePage from "./HomePage"
import SignIn from "./SignIn"
import SignUp from "./SignUp"



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/cashin" element={<CashIn />} />
                <Route path="/cashout" element={<CashOut />} />
            </Routes>
        </BrowserRouter>

    )
} export default App