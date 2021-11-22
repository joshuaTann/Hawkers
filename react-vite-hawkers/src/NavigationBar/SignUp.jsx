import React from "react";
import { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import * as jose from "jose";

function SignUp() {
    const [name, setName] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    const signup = async (username, password, email) => {
        try{
        const response = await fetch("http://localhost:8000/user/signup/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                email,
            }),
        });
        const data = await response.json();
        // jose.jwtDecrypt(data.access)
        console.log("user", data)
    }
    catch (error) {
        console.log("error situation", error);
    }
    finally {
        navigate("/login")
   }
    };

    const typeUsername = (event) => {
        setName(event.target.value);
    };
    const typePassword = (event) => {
        setInputPassword(event.target.value);
    };
    const typeEmail = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="login-page">
            <Typography variant="h3">
                Sign Up here
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
                    <TextField
                        id="email"
                        name="email"
                        size="small"
                        type="email"
                        autoComplete="off"
                        placeholder="Email"
                        onChange={typeEmail}
                    />
                    <Button onClick={() => signup(name, inputPassword, email)}>Register</Button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;