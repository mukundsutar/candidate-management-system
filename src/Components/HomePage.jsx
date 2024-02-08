import React, { useEffect, useState } from "react";
import "../css/home-page.css";
import { NavLink } from "react-router-dom";
import CandidateList from "./CandidateList";
import CandidateProfile from "./CandidateProfile";

export default function HomePage({id}) {
    const [apiData, setAPIData] = useState([]);

    useEffect(() => {
        async function fetchAPI() {
            const url = await fetch(
                "https://60d5a2c2943aa60017768b01.mockapi.io/candidate"
            );

            const data = await url.json();

            setAPIData(data);
        }

        fetchAPI();
    }, []);

    useEffect(() => {
        console.log(apiData);
    }, [apiData]);

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
                <CandidateList apiData={apiData} />

                {apiData && <CandidateProfile apiData={apiData} />}
            </div>
        </>
    );
}
