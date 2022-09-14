import { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useLoginMutation } from "../api/authApi";
import Input from '../components/Input';
import Button from '../components/Button';

const LogInPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [login, loginResults] = useLoginMutation();

    const loginHandler = async () => {
        const result = await login({
            email,
            password
        })
        localStorage.setItem("token", result.data.idToken);
    }
    if (loginResults.isSuccess) {
        return <Navigate to={'/home'} />
    }

    return (
        <div className="registerPage">
            <div className="card">
                <h1 className="title">Log in</h1>
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

                <Button disabled={loginResults.isLoading} onClick={loginHandler}>Log In</Button>
                <NavLink to="/register" className={"registerLink"}>Don't have an account? Register here</NavLink>

                {loginResults.isError && <p className="error">Wrong email or password</p>}
            </div>
        </div>
    )
}

export default LogInPage;