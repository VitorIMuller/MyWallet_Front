import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import SignIn from "./SignIn"
import SignUp from "./SignUp"



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>

    )
} export default App