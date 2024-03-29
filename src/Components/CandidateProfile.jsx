import React, { useEffect, useState } from "react";
import "../css/profile.css";
import { useAtom } from "jotai";
import { candID } from "./CandidateList";
import { NavLink } from "react-router-dom";
import pfp from "../assets/person-bounding-box.svg";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function CandidateProfile({ apiData }) {
    const [candidateId] = useAtom(candID);
    const [candidate, setCandidate] = useState();

    useEffect(() => {
        // console.log(candidateId);

        const fetchedCandidate = apiData.find(
            (candidate) => candidate.id === candidateId
        );

        setCandidate(fetchedCandidate);
    }, [apiData, candidateId]);

    // display lists in formatted way
    const displayList = (listData) => {
        if (!listData || listData.length === 0) {
            return <p>No hobbies listed</p>;
        } else if (typeof listData === "string") {
            return <p>{listData}</p>;
        }

        return <p>{listData.join(", ")}</p>;
    };

    // process education data
    const renderEducation = () => {
        return candidate.education.map((education, index) => (
            <div className="education-text" key={index}>
                <p>{education.institute}</p>
                <p>
                    {education.pass_out_year != "" &&
                        `${education.pass_out_year} - ${
                            education.pass_out_year + 4
                        }`}

                    {/* if there is no pass-out year */}
                    {education.pass_out_year == "" && "-"}
                </p>
            </div>
        ));
    };

    // process skill data
    const renderSkills = () => {
        if (Array.isArray(candidate.skills)) {
            return candidate.skills.map((skill, index) => {
                // Check if the skill is an object
                if (typeof skill === "object" && skill !== null) {
                    return (
                        <div className="skill-text" key={index}>
                            <p>{skill.name}</p>
                            <p>
                                {skill.experience
                                    ? `${skill.experience}m`
                                    : "-"}
                            </p>
                        </div>
                    );
                } else if (typeof skill === "string") {
                    // Handle case when skill is a string
                    return (
                        <div className="skill-text" key={index}>
                            <p>{skill}</p>
                            <p>-</p>
                        </div>
                    );
                } else {
                    // Handle other types of data if necessary
                    return null;
                }
            });
        }
        // Return null if candidate.skills is not an array
        return null;
    };

    // process experience data
    const renderCompany = () => {
        return candidate.experience.map((experience, index) => (
            <div className="experience-text" key={index}>
                {/* Company Name */}
                <p className="companyName">
                    {experience.company != "" ? experience.company : "-"}
                </p>

                {/* Project  Name*/}
                <p>
                    {experience.project != "" && experience.project}

                    {experience.project == "" && "-"}
                </p>

                {/* Role */}
                <p>
                    {experience.role != "" && experience.role}

                    {experience.role == "" && "-"}
                </p>

                {/* Duration */}
                <p>
                    {experience.duration_from && experience.duration_to ? (
                        <p>
                            {experience.duration_from} -{" "}
                            {experience.duration_to}
                        </p>
                    ) : (
                        <p> -</p>
                    )}
                </p>
            </div>
        ));
    };

    return (
        <>
            {/* right side */}
            <div className="profile">
                <div className="modify-buttons">
                    {/* edit record */}
                    <NavLink to={"/candidate/" + candidateId + "/edit"}>
                        <Button
                            sx={{ mb: 1 }}
                            variant="contained"
                            color="secondary"
                        >
                            <EditIcon />
                        </Button>
                    </NavLink>

                    {/* delete record */}
                    {/* edit record */}

                    {/* delete record */}
                    <Button variant="contained" color="error">
                        <DeleteForeverIcon />
                    </Button>
                </div>

                {/* personal info */}
                <div className="profile-ele personal">
                    {/* profile picture */}
                    {candidate && candidate.profile_picture ? (
                        <img src={candidate.profile_picture} alt="" srcSet="" />
                    ) : (
                        <img src={pfp} alt="" srcSet="" />
                    )}

                    {candidate && (
                        <div className="personal-text">
                            <p>{candidate.name}</p>
                            <p>{candidate.email}</p>
                            <p>{candidate.gender}</p>

                            {/* <p> */}
                            {displayList(candidate.hobbies)}
                            {/* </p> */}
                        </div>
                    )}
                </div>

                {/* education */}
                <div className="profile-ele education">
                    {candidate && renderEducation()}
                </div>

                {/* skills */}
                <div className="profile-ele skill">
                    {candidate && renderSkills()}
                </div>

                {/* experience */}
                <div className="profile-ele experience">
                    {candidate && renderCompany()}
                </div>
            </div>
        </>
    );
}
