import React from "react";
import "../css/login-page.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import {
    Box,
    Button,
    ButtonGroup,
    CardActions,
    CardContent,
    TextField,
    Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const theme = createTheme({
    palette: {
        primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
});

export default function LoginPage() {
    return (
        <>
            <Card
                sx={{
                    minWidth: 275,
                    backgroundColor: "#beb7a4",
                    // color: "aliceblue",
                }}
            >
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h4" gutterBottom sx={{ m: 4 }}>
                        Login Here...
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="UserID"
                        variant="outlined"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                    />

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
                            <Button>Submit</Button>
                            <Button color="error">Register</Button>
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
                            <Button color="success">
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
