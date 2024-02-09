import React, { useEffect, useState } from "react";
import "../css/add-new.css";

export default function CandidateAddNew() {
    const [selectedGender, setSelectedGender] = useState("");
    const [hobbies, setHobbies] = useState([]);
    const [currentHobby, setCurrentHobby] = useState("");

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    const handleInputChange = (event) => {
        setCurrentHobby(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && currentHobby.trim() !== "") {
            setHobbies([...hobbies, currentHobby.trim()]);
            setCurrentHobby(""); // Clear the input field
        }
    };

    useEffect(() => {
        console.log(selectedGender);
        console.log(hobbies);
    }, [selectedGender, hobbies]);

    return (
        <>
            <form action="" method="post">
                <div className="add-new">
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
                    <div className="add-new-ele add-new-personal">
                        {/* profile picture */}
                        <img
                            src="https://via.placeholder.com/600/92c952"
                            alt=""
                            srcSet=""
                        />

                        <div className="add-new-personal-text">
                            <input
                                type="text"
                                name="cand-name"
                                placeholder="Name"
                            />
                            <input
                                type="text"
                                name="cand-email"
                                placeholder="Email"
                            />
                            <select
                                name="gender"
                                id="gender"
                                onChange={handleGenderChange}
                                value={selectedGender}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other..</option>
                            </select>
                            <input
                                type="text"
                                name="cand-hobbies"
                                placeholder="Hobbies"
                                value={currentHobby}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyPress}
                            />
                        </div>
                    </div>

                    {/* education */}
                    <div className="add-new-ele add-new-education">
                        <div className="add-new-education-text">
                            <p>Institute</p>
                            <p>Year</p>
                        </div>
                        <button className="add-new-education-add" type="button">
                            <i className="bi bi-plus-lg"></i>
                        </button>
                    </div>

                    {/* skills */}
                    <div className="add-new-ele add-new-skill">
                        {/* {candidate && renderSkills()} */}
                        <div className="add-new-skill-text">
                            <p>Skill Name</p>
                            <p>Experience months</p>
                        </div>

                        <button className="skill-add" type="button">
                            <i className="bi bi-plus-lg"></i>
                        </button>
                    </div>

                    {/* experience */}
                    <div className="add-new-ele add-new-experience">
                        {/* {candidate && renderCompany()} */}
                        <div className="experience-text">
                            {/* Company Name */}
                            <p className="companyName">Company Name</p>

                            {/* Project  Name*/}
                            <p>Project name</p>

                            {/* Role */}
                            <p>Role</p>

                            {/* Duration */}
                            <p>Duration to and from</p>
                        </div>

                        <button className="experience-add" type="button">
                            <i className="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
