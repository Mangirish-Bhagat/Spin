import React from "react";
import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")

    const loginFunc = () => {
        console.log(userName, password)
        if (userName === "user" && password === "password") {
            window.alert("Login Sucessful!")
            navigate("/homepage");
        } else (
            window.alert("Wrong Username or Password")
        )

    }

    return (
        <div className="page">

            <div className="cover">
                <h1>Spin-N-Win</h1>
                <h3>Login</h3>
                <input type="text" name='user' placeholder='username'
                    onChange={e => setUserName(e.target.value)} />
                <input type="password" placeholder="password"
                    onChange={e => setPassword(e.target.value)} />
                <button className="login-btn" onClick={loginFunc}>Login</button>
            </div>

        </div>

    )
}

export default LoginForm