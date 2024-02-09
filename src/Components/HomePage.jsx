import React, { useEffect, useState } from "react";
import "../css/home-page.css";
import { NavLink } from "react-router-dom";
import CandidateList from "./CandidateList";
import CandidateProfile from "./CandidateProfile";
import Header from "./Header";
import CandidateAddNew from "./CandidateAddNew";
import MaterialRight from "./MaterialRight";
import MaterialLeft from "./MaterialLeft";
import CandidateEdit from "./CandidateEdit";
import MediaQuery, { useMediaQuery } from "react-responsive";

export default function HomePage({ newFlag, candEditFlag }) {
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
            <Header apiData={apiData} />
            <div className="cadidate-container">
                <MediaQuery minWidth={1224}>
                    <CandidateList apiData={apiData} />
                </MediaQuery>

                {newFlag ? (
                    <CandidateAddNew />
                ) : (
                    apiData && <CandidateProfile apiData={apiData} />
                )}

                {newFlag == false && candEditFlag == true && apiData && (
                    <CandidateEdit apiData={apiData} />
                )}
            </div>
        </>
    );
}
