import React from "react";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Container,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import Person4Icon from "@mui/icons-material/Person4";

export default function MaterialLeft() {
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

                <Box sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ mb: 0 }}>
                        h4. Heading
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        h6. Heading
                    </Typography>
                </Box>
            </Box>
        </>
    );
}
