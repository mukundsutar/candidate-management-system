import React from "react";
import "../css/home-page.css";
import { NavLink } from "react-router-dom";
import CandidateList from "./CandidateList";
import CandidateProfile from "./CandidateProfile";

export default function HomePage() {
    return (
        <>
            <div className="list-header">
                {/* add a new candidate */}
                <button className="add-btn" type="button">
                    <i className="bi bi-plus-lg" style={{ fontSize: 25 }}></i>
                </button>

                {/* back to login page */}
                <NavLink to="/login">
                    <button className="login-page-btn" type="button">
                        Back to Login
                    </button>
                </NavLink>
            </div>
            <div className="cadidate-container">
                <CandidateList />

                <CandidateProfile />
            </div>
        </>
    );
}
