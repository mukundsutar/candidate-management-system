import React from "react";
import profilePhoto from "../assets/person-bounding-box.svg";
import { NavLink } from "react-router-dom";
import { atom, useAtom } from "jotai";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import MediaQuery from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";

export const candID = atom("236");

export default function CandidateList({ apiData }) {
    const [candidateId, setCandidateId] = useAtom(candID);

    return (
        <>
            <div className="cadidate-list">
                {/* add a new candidate */}
                <NavLink to="/candidate/new" id="add-btn-link">
                    <Button variant="contained" sx={{ m: 0 }}>
                        <AddIcon />
                    </Button>
                </NavLink>

                {apiData &&
                    apiData.map((candidate, index) => (
                        <NavLink
                            to={"/candidate/" + candidate.id}
                            onClick={() => setCandidateId(candidate.id)}
                            key={index}
                        >
                            <MediaQuery minWidth={1224}>
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        mb: 4,
                                        p: 4,
                                        borderRadius: 5,
                                    }}
                                >
                                    {candidate.profile_picture ? (
                                        <Avatar
                                            variant="rounded"
                                            alt="Remy Sharp"
                                            src={candidate.profile_picture}
                                            sx={{
                                                height: "100%",
                                                width: "26%",
                                                borderRadius: 4,
                                            }}
                                        />
                                    ) : (
                                        <Avatar
                                            variant="rounded"
                                            alt="Remy Sharp"
                                            src={profilePhoto}
                                            sx={{
                                                height: "100%",
                                                width: "26%",
                                                borderRadius: 4,
                                            }}
                                        />
                                    )}

                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            ml: 7,
                                            width: "50%",
                                        }}
                                    >
                                        {candidate.name != "" ? (
                                            <Typography variant="h3">
                                                {candidate.name}
                                            </Typography>
                                        ) : (
                                            "-"
                                        )}
                                        {candidate.name != "" ? (
                                            <Typography variant="h4">
                                                {"ID" + candidate.id}
                                            </Typography>
                                        ) : (
                                            "-"
                                        )}
                                    </Box>
                                </Card>
                            </MediaQuery>

                            {/* resposive */}
                            <MediaQuery maxWidth={1224}>
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        mb: 4,
                                        p: 2,
                                        borderRadius: 5,
                                    }}
                                >
                                    <Avatar
                                        variant="rounded"
                                        alt="Remy Sharp"
                                        src={
                                            candidate.profile_picture
                                                ? candidate.profile_picture
                                                : profilePhoto
                                        }
                                        sx={{
                                            height: "100%",
                                            width: "30%",
                                        }}
                                    />

                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            mt: 1,
                                            width: "50%",
                                        }}
                                    >
                                        {candidate.name != "" ? (
                                            <Typography variant="h5">
                                                {candidate.name}
                                            </Typography>
                                        ) : (
                                            "-"
                                        )}
                                        {candidate.name != "" ? (
                                            <Typography variant="h6">
                                                {"ID" + candidate.id}
                                            </Typography>
                                        ) : (
                                            "-"
                                        )}
                                    </Box>
                                </Card>
                            </MediaQuery>
                        </NavLink>
                    ))}
            </div>
        </>
    );
}
