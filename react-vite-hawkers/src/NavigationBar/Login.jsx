import React from "react";
import { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import * as jose from "jose";

function Login() {
    const [token, setToken] = useState()
    const [name, setName] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const navigate = useNavigate()

    const login = async (username, password) => {
        const response = await fetch("http://localhost:8000/api/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
        const data = await response.json();
        setToken(data.access);
        // jose.jwtDecrypt(data.access)
        navigate("/Hawkers")
    };

    if(token !== undefined){
    console.log("loginToken", token);
    };

    const typeUsername = (event) => {
        setName(event.target.value);
    };
    const typePassword = (event) => {
        setInputPassword(event.target.value);
    };

    return (
        <div className="login-page">
            <Typography variant="h3">
                Login Page
            </Typography>
            <NavLink to={"/"}>
                <p>Back to Main Page</p>
            </NavLink>
            <div className="login">
                <form className="login-form">
                    <TextField
                        id="username"
                        name="username"
                        size="small"
                        autoComplete="off"
                        placeholder="Insert Username"
                        onChange={typeUsername}
                    />
                    <TextField
                        id="password"
                        name="password"
                        size="small"
                        autoComplete="off"
                        placeholder="Insert Password"
                        onChange={typePassword}
                    />
                    <Button onClick={() => login(name, inputPassword)}>Log In</Button>
                </form>
            </div>
        </div>
    );
}

export default Login;