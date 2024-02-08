import React from "react";

export default function CandidateList() {
    const items = [
        "Mukund",
        "Darshan",
        "Tanmay",
        "Sharma",
        "Hrithik",
        "Chetan",
        "Rohan",
    ];
    const skills = [
        "React",
        "Java",
        "Express",
        "Python",
        "Git",
        "MongoDB",
        "C",
    ];

    const combined = items.map((item, index) => [item, skills[index]]);

    return (
        <>
            {/* left side */}
            <div className="cadidate-list">
                {combined.map((pair, index) => (
                    <div className="list-item" key={index}>
                        <img
                            src="https://via.placeholder.com/600/92c952"
                            alt=""
                            srcSet=""
                        />
                        <div className="list-item-text">
                            <p>{pair[0]}</p>
                            <p>{pair[1]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
