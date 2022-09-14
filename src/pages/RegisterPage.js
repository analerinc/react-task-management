import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useRegisterMutation } from "../api/authApi";
import '../styles/RegisterPage.scss';
import Input from "../components/Input";
import Button from "../components/Button";

const RegisterPage = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [register, registerResult] = useRegisterMutation();


    const registerHandler = () => {
        if (password !== confirmPassword) {
            alert('Password and confirm password must match!');
            return;
        }
        register({
            firstName,
            lastName,
            email,
            password
        })
    }

    if (registerResult.isSuccess) {
        return <Navigate to={'/login'} />
    }


    return (
        <div className="registerPage">
            <div className="card">
                <h1 className="title"> Register Here</h1>
                <Input
                    type="text"
                    placeholder="Firstname"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                /> <br />
                <Input
                    type="text"
                    placeholder="Lastname"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                /> <br />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                /> <br />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                /> <br />
                <Input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                /> <br />

                <Button disabled={registerResult.isLoading} onClick={registerHandler}>Register</Button>
                {registerResult.isError && <p className="error">Error</p>}
            </div>
        </div>
    )
}

export default RegisterPage;