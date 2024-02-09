import React from "react";
import profilePhoto from "../assets/person-bounding-box.svg";
import { NavLink } from "react-router-dom";
import { atom, useAtom } from "jotai";
import { Button } from "@mui/material";

export const candID = atom("236");

export default function CandidateList({ apiData }) {
    const [candidateId, setCandidateId] = useAtom(candID);

    return (
        <>
            <div className="cadidate-list">
                {/* add a new candidate */}
                <NavLink to="/candidate/new" id="add-btn-link">
                    {/* <button className="add-btn" type="button">
                        Add new Candidate
                    </button> */}
                    <Button variant="contained" color="success">
                        Add new Candidate
                    </Button>
                </NavLink>

                {apiData &&
                    apiData.map((candidate, index) => (
                        <NavLink
                            to={"/candidate/" + candidate.id}
                            onClick={() => setCandidateId(candidate.id)}
                            key={index}
                        >
                            <div className="list-item">
                                {/* <img src={profilePhoto} alt="" srcSet="" /> */}
                                {candidate.profile_picture ? (
                                    <img
                                        src={candidate.profile_picture}
                                        alt=""
                                        srcSet=""
                                    />
                                ) : (
                                    <img src={profilePhoto} alt="" srcSet="" />
                                )}
                                <div className="list-item-text">
                                    <p className="list-name">
                                        {candidate.name != ""
                                            ? candidate.name
                                            : "-"}
                                    </p>
                                    <p>
                                        ID
                                        {candidate.id != ""
                                            ? candidate.id
                                            : "-"}
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
            </div>
        </>
    );
}
