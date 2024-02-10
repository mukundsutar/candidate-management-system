import React, { useState } from "react";
import "../css/login-page.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { redirect, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import {
    Box,
    Button,
    ButtonGroup,
    CardContent,
    TextField,
    Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function LoginPage() {
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState("");

    const [formData, setFormData] = useState({
        userID: "",
        password: "",
    });

    const userList = [
        { userID: "mukund", password: "123" },
        { userID: "user", password: "pass" },
        { userID: "123", password: "123" },
    ];

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const user = userList.find(
            (user) =>
                user.userID === formData.userID &&
                user.password === formData.password
        );

        if (user) {
            console.log("Login successful");
            navigate("/candidate");
        } else {
            console.log("Invalid userID or password");
        }
    };

    const handleRegister = (event) => {
        event.preventDefault();
        const isUserExists = userList.some(
            (user) => user.userID === formData.userID
        );
        if (!isUserExists) {
            userList.push(formData);
            setFeedback("User registered successfully");
            console.log("User registered successfully");
        } else {
            setFeedback("User already exists");
            console.log("User already exists");
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <Card
                sx={{
                    width: 300,
                    minWidth: 275,
                    backgroundColor: "#beb7a4",
                    // color: "aliceblue",
                }}
            >
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h4" gutterBottom sx={{ m: 4 }}>
                        Login Here...
                    </Typography>
                    <form className="loginForm" action="">
                        <TextField
                            id="userID"
                            name="userID"
                            label="UserID"
                            variant="outlined"
                            value={formData.userID}
                            onChange={handleInputChange}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </form>

                    <Typography
                        variant="h6"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                            m: 2,
                            mb: 0,
                        }}
                    >
                        {feedback}
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            m: 3,
                        }}
                    >
                        <ButtonGroup
                            variant="contained"
                            aria-label="Basic button group"
                        >
                            <Button onClick={handleSubmit}>Submit</Button>
                            <Button color="error" onClick={handleRegister}>
                                Register
                            </Button>
                        </ButtonGroup>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            m: 0,
                        }}
                    >
                        <ButtonGroup
                            variant="contained"
                            aria-label="Basic button group"
                        >
                            <Button color="success" >
                                <GoogleIcon />
                            </Button>
                            <Button>
                                <LinkedInIcon />
                            </Button>
                            <Button color="secondary">
                                <GitHubIcon />
                            </Button>
                        </ButtonGroup>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}
