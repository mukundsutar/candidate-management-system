import React, { useEffect, useState } from "react";
import "../css/home-page.css";
import { NavLink } from "react-router-dom";
import CandidateList from "./CandidateList";
import CandidateProfile from "./CandidateProfile";
import Header from "./Header";
import CandidateAddNew from "./CandidateAddNew";
import MaterialRight from "./MaterialRight";
import MaterialLeft from "./MaterialLeft";

export default function HomePage({ newFlag }) {
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
            <Header />
            <div className="cadidate-container">
                <MaterialLeft apiData={apiData} />

                {newFlag ? (
                    apiData && <MaterialRight apiData={apiData} />
                ) : (
                    <MaterialRight />
                )}
            </div>
        </>
    );
}
