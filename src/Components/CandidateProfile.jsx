import React, { useEffect, useState } from "react";
import "../css/candidate-profile.css";
import { useAtom } from "jotai";
import { candID } from "./CandidateList";

export default function CandidateProfile({ apiData }) {
    const [candidateId] = useAtom(candID);
    const [candidate, setCandidate] = useState();

    useEffect(() => {
        console.log(candidateId);
        console.log(apiData);
        // Fetch candidate details by ID and set the state
        const fetchedCandidate = apiData.find(
            (candidate) => candidate.id === candidateId
        );

        setCandidate(fetchedCandidate);
    }, [apiData]);

    // education
    const edu = [
        "University A",
        "University B",
        "University C",
        "University D",
        "University E",
        "University F",
    ];

    const eduYear = [
        "2015 - 2019",
        "2016 - 2020",
        "2017 - 2021",
        "2018 - 2022",
        "2019 - 2023",
        "2020 - 2024",
    ];

    const eduCombined = edu.map((item, index) => [item, eduYear[index]]);

    // skill
    const skill = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
    ];

    const skillMonth = [
        "6 months",
        "1 year",
        "2 years",
        "1.5 years",
        "1 year",
        "9 months",
    ];

    const skillCombined = skill.map((item, index) => [item, skillMonth[index]]);

    // company
    const companyName = [
        "Company A",
        "Company B",
        "Company C",
        "Company D",
        "Company E",
        "Company F",
    ];

    const projectName = [
        "Project 1",
        "Project 2",
        "Project 3",
        "Project 4",
        "Project 5",
        "Project 6",
    ];

    const companyRole = [
        "Developer",
        "Designer",
        "Project Manager",
        "QA Engineer",
        "DevOps Engineer",
        "Business Analyst",
    ];

    const duration = [
        "6 months",
        "1 year",
        "9 months",
        "2 years",
        "1.5 years",
        "1 year",
    ];

    const companyCombined = companyName.map((name, index) => ({
        name,
        project: projectName[index],
        role: companyRole[index],
        duration: duration[index],
    }));

    return (
        <>
            {/* right side */}
            <div className="profile">
                <div className="modify-buttons">
                    {/* edit record */}
                    <button type="button">
                        <i
                            className="bi bi-pencil-fill"
                            style={{ fontSize: 25 }}
                        ></i>
                    </button>

                    {/* delete record */}
                    <button type="button">
                        <i
                            className="bi bi-trash-fill"
                            style={{ fontSize: 25 }}
                        ></i>
                    </button>
                </div>

                {/* personal info */}
                <div className="profile-ele personal">
                    {/* profile picture */}
                    <img
                        src="https://via.placeholder.com/600/92c952"
                        alt=""
                        srcSet=""
                    />

                    {candidate && (
                        <div className="personal-text">
                            <p>{candidate.name}</p>
                            <p>{candidate.email}</p>
                            <p>Gender</p>
                            <p>Hobbies</p>
                        </div>
                    )}
                </div>

                {/* education */}
                <div className="profile-ele education">
                    {eduCombined.map((pair, index) => (
                        <div className="education-text" key={index}>
                            <p>{pair[0]}</p>
                            <p>{pair[1]}</p>
                        </div>
                    ))}

                    <button className="education-add" type="button">
                        <i className="bi bi-plus-lg"></i>
                    </button>
                </div>

                {/* skills */}
                <div className="profile-ele skill">
                    {skillCombined.map((pair, index) => (
                        <div className="skill-text" key={index}>
                            <p>{pair[0]}</p>
                            <p>{pair[1]}</p>
                        </div>
                    ))}

                    <button className="skill-add" type="button">
                        <i className="bi bi-plus-lg"></i>
                    </button>
                </div>

                {/* experience */}
                <div className="profile-ele company">
                    {companyCombined.map((item, index) => (
                        <div className="company-text" key={index}>
                            <p>Name: {item.name}</p>
                            <p>Project: {item.project}</p>
                            <p>Role: {item.role}</p>
                            <p>Duration: {item.duration}</p>
                        </div>
                    ))}

                    <button className="company-add" type="button">
                        <i className="bi bi-plus-lg"></i>
                    </button>
                </div>
            </div>
        </>
    );
}
