import React from "react";
import profilePhoto from "../assets/person-bounding-box.svg";
import { NavLink } from "react-router-dom";
import { atom, useAtom } from "jotai";

export const candID = atom("236");

export default function CandidateList({ apiData }) {
    const [candidateId, setCandidateId] = useAtom(candID);

    return (
        <>
            <div className="cadidate-list">
                {/* add a new candidate */}
                <button className="add-btn" type="button">
                    <i className="bi bi-plus-lg" style={{ fontSize: 30 }}></i>
                </button>

                {apiData &&
                    apiData.map((candidate, index) => (
                        <NavLink
                            to={"/candidate/" + candidate.id}
                            onClick={() => setCandidateId(candidate.id)}
                            key={index}
                        >
                            <div className="list-item">
                                <img src={profilePhoto} alt="" srcSet="" />
                                <div className="list-item-text">
                                    <p>
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
