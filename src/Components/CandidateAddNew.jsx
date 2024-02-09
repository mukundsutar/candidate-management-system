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

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare data to be sent to the API
        const formData = {
            // profile_picture: event.target.elements["profile_picture"].value,
            name: event.target.elements["cand-name"].value,
            address: event.target.elements["cand-address"].value,
            phone: event.target.elements["cand-phone"].value,
            email: event.target.elements["cand-email"].value,
            gender: selectedGender,
            hobbies: hobbies,

            // Education
            education: [
                {
                    institute: event.target.elements["collegeName"].value,
                    degree: event.target.elements["degreeName"].value,
                    percentage: event.target.elements["percentage"].value,
                    pass_out_year: event.target.elements["year"].value,
                },
            ],
            // skills
            skills: [
                {
                    name: event.target.elements["skillName"].value,
                    experience: event.target.elements["months"].value,
                },
            ],
            // company
            experience: [
                {
                    company: event.target.elements["companyName"].value,
                    project: event.target.elements["projectName"].value,
                    role: event.target.elements["Role"].value,
                    team_size: event.target.elements["teamSize"].value,
                    duration_from: event.target.elements["Duration"].value,
                    duration_to: event.target.elements["Duration"].value, //
                },
            ],
        };

        console.log(formData);

        try {
            // Make a POST request to the API endpoint
            const response = await fetch(
                "https://60d5a2c2943aa60017768b01.mockapi.io/candidate",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                // Handle success
                console.log("Data submitted successfully");
            } else {
                // Handle error
                console.error("Failed to submit data");
            }
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    const [skills, setSkills] = useState([{ name: "", experience: "" }]);

    const handleAddSkill = () => {
        setSkills([...skills, { name: "", experience: "" }]);
    };

    const handleDeleteSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };

    const handleSkillChange = (index, event) => {
        const { name, value } = event.target;
        const updatedSkills = [...skills];
        updatedSkills[index][name] = value;
        setSkills(updatedSkills);
    };

    return (
        <>
            <form action="" method="post" onSubmit={handleSubmit}>
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
                                name="cand-address"
                                placeholder="Address"
                            />
                            <input
                                type="text"
                                name="cand-phone"
                                placeholder="phone"
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
                            <input
                                type="text"
                                name="collegeName"
                                id=""
                                placeholder="Institute Name"
                            />
                            <input
                                type="text"
                                name="degreeName"
                                id=""
                                placeholder="Degree Name"
                            />
                            <input
                                type="number"
                                name="percentage"
                                id=""
                                placeholder="Percentage"
                            />
                            <input
                                type="text"
                                name="year"
                                id=""
                                placeholder="Year"
                            />
                        </div>
                        <button className="add-new-education-add" type="button">
                            <i className="bi bi-plus-lg"></i>
                        </button>
                    </div>

                    {/* skills */}
                    <div className="add-new-skill">
                        {skills.map((skill, index) => (
                            <div className="add-new-skill-text" key={index}>
                                <input
                                    type="text"
                                    name="name"
                                    value={skill.name}
                                    onChange={(event) =>
                                        handleSkillChange(index, event)
                                    }
                                    placeholder="Skill Name"
                                />
                                <input
                                    type="text"
                                    name="experience"
                                    value={skill.experience}
                                    onChange={(event) =>
                                        handleSkillChange(index, event)
                                    }
                                    placeholder="Experience"
                                />
                                <button className="skill-delete"
                                    type="button"
                                    onClick={() => handleDeleteSkill(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                        <button
                            className="skill-add"
                            type="button"
                            onClick={handleAddSkill}
                        >
                            Add Skill
                        </button>
                    </div>

                    {/* experience */}
                    <div className="add-new-ele add-new-experience">
                        {/* {candidate && renderCompany()} */}
                        <div className="add-new-experience-text">
                            {/* Company Name */}
                            <input
                                type="text"
                                name="companyName"
                                id=""
                                placeholder="Company Name"
                            />

                            {/* Project  Name*/}
                            <input
                                type="text"
                                name="projectName"
                                id=""
                                placeholder="Project Name"
                            />

                            {/* Role */}
                            <input
                                type="text"
                                name="Role"
                                id=""
                                placeholder="Role"
                            />

                            {/* Team Size */}
                            <input
                                type="number"
                                name="teamSize"
                                id=""
                                placeholder="Team Size"
                            />

                            {/* Duration */}
                            <input
                                type="text"
                                name="Duration"
                                id=""
                                placeholder="Duration to and from"
                            />
                        </div>

                        <button className="experience-add" type="button">
                            <i className="bi bi-plus-lg"></i>
                        </button>
                    </div>

                    <div className="submitDiv">
                        <button className="submitDetails" type="submit">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
