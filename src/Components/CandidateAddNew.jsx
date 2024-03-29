import React, { useEffect, useState } from "react";
import "../css/add-new.css";
import { Button, Divider } from "@mui/material";
import pfp from "../assets/pfp.jpg";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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

    // useEffect(() => {
    //     console.log(selectedGender);
    //     console.log(hobbies);
    // }, [selectedGender, hobbies]);

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
                    year: event.target.elements["year"].value,
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
                    role: event.target.elements["role"].value,
                    team_size: event.target.elements["teamSize"].value,
                    duration_from: event.target.elements["duration"].value,
                    duration_to: event.target.elements["duration"].value, //
                },
            ],
        };

        // console.log(formData);

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
        setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
    };

    const handleSkillChange = (index, event) => {
        const { name, value } = event.target;
        const updatedSkills = [...skills];
        updatedSkills[index][name] = value;
        setSkills(updatedSkills);
    };

    const [educations, setEducations] = useState([
        { institute: "", degree: "", percentage: "", year: "" },
    ]);

    const handleAddEducation = () => {
        setEducations([
            ...educations,
            { institute: "", degree: "", percentage: "", year: "" },
        ]);
    };

    const handleDeleteEducation = (index) => {
        setEducations((prevEducations) =>
            prevEducations.filter((_, i) => i !== index)
        );
    };

    const handleEducationChange = (index, event) => {
        const { name, value } = event.target;
        const updatedEducations = [...educations];
        updatedEducations[index][name] = value;
        setEducations(updatedEducations);
    };

    const [experiences, setExperiences] = useState([
        { company: "", project: "", role: "", teamSize: "", duration: "" },
    ]);

    const handleAddExperience = () => {
        setExperiences([
            ...experiences,
            { company: "", project: "", role: "", teamSize: "", duration: "" },
        ]);
    };

    const handleDeleteExperience = (index) => {
        setExperiences((prevExperiences) =>
            prevExperiences.filter((_, i) => i !== index)
        );
    };

    const handleExperienceChange = (index, event) => {
        const { name, value } = event.target;
        const updatedExperiences = [...experiences];
        updatedExperiences[index][name] = value;
        setExperiences(updatedExperiences);
    };

    return (
        <>
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="add-new">
                    <div className="modify-buttons">
                        {/* edit record */}
                        <Button sx={{ mb: 1 }} variant="contained">
                            <EditIcon />
                        </Button>

                        {/* delete record */}
                        <Button variant="contained">
                            <DeleteForeverIcon />
                        </Button>
                    </div>

                    {/* personal info */}
                    <div className="add-new-ele add-new-personal">
                        {/* profile picture */}
                        <img src={pfp} alt="" srcSet="" />

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
                        {educations.map((education, index) => (
                            <div className="add-new-education-text" key={index}>
                                <input
                                    type="text"
                                    name="collegeName"
                                    value={education.institute}
                                    onChange={(event) =>
                                        handleEducationChange(index, event)
                                    }
                                    placeholder="Institute Name"
                                />

                                <input
                                    type="text"
                                    name="degreeName"
                                    value={education.degree}
                                    onChange={(event) =>
                                        handleEducationChange(index, event)
                                    }
                                    placeholder="Degree Name"
                                />

                                <input
                                    type="number"
                                    name="percentage"
                                    value={education.percentage}
                                    onChange={(event) =>
                                        handleEducationChange(index, event)
                                    }
                                    placeholder="Percentage"
                                />

                                <input
                                    type="text"
                                    name="year"
                                    value={education.year}
                                    onChange={(event) =>
                                        handleEducationChange(index, event)
                                    }
                                    placeholder="Year"
                                />

                                <Button
                                    variant="contained"
                                    onClick={() => handleDeleteEducation(index)}
                                >
                                    Delete
                                </Button>
                            </div>
                        ))}
                        <Button
                            variant="contained"
                            className="education-add"
                            type="button"
                            onClick={() => handleAddEducation()}
                            color="success"
                        >
                            Add
                        </Button>
                    </div>

                    {/* skills */}
                    <div className="add-new-skill">
                        {skills.map((skill, index) => (
                            <div className="add-new-skill-text" key={index}>
                                <input
                                    type="text"
                                    name="skillName"
                                    value={skill.name}
                                    onChange={(event) =>
                                        handleSkillChange(index, event)
                                    }
                                    placeholder="Skill Name"
                                />
                                <input
                                    type="text"
                                    name="months"
                                    value={skill.experience}
                                    onChange={(event) =>
                                        handleSkillChange(index, event)
                                    }
                                    placeholder="Experience"
                                />
                                <Button
                                    sx={{ width: "20%" }}
                                    variant="contained"
                                    onClick={() => handleDeleteSkill(index)}
                                >
                                    Delete
                                </Button>
                            </div>
                        ))}
                        <Button
                            variant="contained"
                            className="skill-add"
                            type="button"
                            onClick={() => handleAddSkill()}
                            color="success"
                        >
                            Add
                        </Button>
                    </div>

                    {/* experience */}
                    <div className="add-new-ele add-new-experience">
                        {educations.map((education, index) => (
                            <div
                                className="add-new-experience-text"
                                key={index}
                            >
                                <input
                                    type="text"
                                    name="companyName"
                                    value={experiences.company}
                                    onChange={(event) =>
                                        handleExperienceChange(index, event)
                                    }
                                    placeholder="Institute Name"
                                />
                                <input
                                    type="text"
                                    name="projectName"
                                    value={experiences.project}
                                    onChange={(event) =>
                                        handleExperienceChange(index, event)
                                    }
                                    placeholder="Project Name"
                                />
                                <input
                                    type="text"
                                    name="role"
                                    value={experiences.role}
                                    onChange={(event) =>
                                        handleExperienceChange(index, event)
                                    }
                                    placeholder="Role"
                                />
                                <input
                                    type="number"
                                    name="teamSize"
                                    value={experiences.teamSize}
                                    onChange={(event) =>
                                        handleExperienceChange(index, event)
                                    }
                                    placeholder="Team Size"
                                />
                                <input
                                    type="date"
                                    name="duration"
                                    value={experiences.year}
                                    onChange={(event) =>
                                        handleExperienceChange(index, event)
                                    }
                                    placeholder="Year"
                                />
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        handleDeleteExperience(index)
                                    }
                                >
                                    Delete
                                </Button>
                            </div>
                        ))}
                        <Button
                            variant="contained"
                            className="education-add"
                            type="button"
                            onClick={() => handleAddEducation()}
                            color="success"
                        >
                            Add
                        </Button>
                    </div>

                    <Button type="submit" variant="contained" sx={{ m: 4 }}>
                        Save
                    </Button>
                </div>
            </form>
        </>
    );
}
