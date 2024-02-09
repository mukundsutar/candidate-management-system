import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Container,
    Typography,
} from "@mui/material";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import Person4Icon from "@mui/icons-material/Person4";

export default function Material() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    m: 3,
                }}
            >
                <ButtonGroup
                    variant="contained"
                    aria-label="Basic button group"
                    sx={{ height: 50 }}
                >
                    <Button>One</Button>
                    <Button>Two</Button>
                </ButtonGroup>

                {/* main right info */}
                <Box sx={{height:'100%', p: 4,overflowY: "auto", }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            
                        }}
                    >
                        <Avatar sx={{ width: 200, height: 200 }}>
                            <Person4Icon sx={{ width: 150, height: 150 }} />
                        </Avatar>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <Typography variant="h4" sx={{ ml: 7 }}>
                                Mukund
                            </Typography>

                            <Typography variant="h4" sx={{ ml: 7 }}>
                                Email
                            </Typography>

                            <Typography variant="h4" sx={{ ml: 7 }}>
                                Number
                            </Typography>

                            <Typography variant="h4" sx={{ ml: 7 }}>
                                Hobbies
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{ display: "flex", flexDirection: "column", p: 4 }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                p: 2,
                            }}
                        >
                            <Typography variant="h5">College Name</Typography>

                            <Typography variant="h5">Year</Typography>
                        </Box>

                        <Button variant="contained" sx={{ width: "20%" }}>
                            Add
                        </Button>
                    </Box>
                    <Box
                        sx={{ display: "flex", flexDirection: "column", p: 4 }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                p: 2,
                            }}
                        >
                            <Typography variant="h5">College Name</Typography>

                            <Typography variant="h5">Year</Typography>
                        </Box>

                        <Button variant="contained" sx={{ width: "20%" }}>
                            Add
                        </Button>
                    </Box>
                    <Box
                        sx={{ display: "flex", flexDirection: "column", p: 4 }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                p: 2,
                            }}
                        >
                            <Typography variant="h5">Company Name</Typography>

                            <Typography variant="h5">Year</Typography>
                        </Box>

                        <Button variant="contained" sx={{ width: "20%" }}>
                            Add
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
