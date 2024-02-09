import React, { useEffect, useState } from "react";
import CandidateList from "./CandidateList";
import Header from "./Header";
import EditPage from "./EditPage";

export default function CandidateEdit() {
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

    return (
        <>
            <Header />
            <div className="cadidate-container">
                <CandidateList apiData={apiData} />

                {/* {apiData && <EditPage apiData={apiData} />} */}
            </div>
        </>
    );
}
