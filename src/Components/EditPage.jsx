import React, { useEffect, useState } from "react";
import { Button } from "@mui/material"; // Import Button component from MUI

export default function EditPage() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
        gender: "",
        hobbies: [],
        educations: [], // Initialize educations as an empty array
        skills: [],
        experiences: [],
    });

    useEffect(() => {
        // Fetch existing data for the record to be updated
        fetch("https://60d5a2c2943aa60017768b01.mockapi.io/candidate/")
            .then((response) => response.json())
            .then((data) => {
                setFormData(data); // Set the form data with the fetched data
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            // Make a PUT request to update the record
            const response = await fetch("https://60d5a2c2943aa60017768b01.mockapi.io/candidate/", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Record updated successfully");
            } else {
                console.error("Failed to update record");
            }
        } catch (error) {
            console.error("Error updating record:", error);
        }
    };

    // Define the missing functions
    const handleInputChangeByIndex = (index, event) => {
        const { name, value } = event.target;
        const updatedEducations = [...formData.educations];
        updatedEducations[index][name] = value;
        setFormData({ ...formData, educations: updatedEducations });
    };

    const handleDeleteByIndex = (index) => {
        const updatedEducations = formData.educations.filter(
            (_, i) => i !== index
        );
        setFormData({ ...formData, educations: updatedEducations });
    };

    const handleAddByIndex = () => {
        const newEducation = {
            institute: "",
            degree: "",
            percentage: "",
            year: "",
        };
        setFormData({
            ...formData,
            educations: [...formData.educations, newEducation],
        });
    };

    return (
        <>
            <form action="" method="post" onSubmit={handleFormSubmit}>
                {/* Form content */}
                {/* Personal info */}
                {/* Education */}
                {formData &&
                    formData.educations.map((education, index) => (
                        <div
                            className="add-new-ele add-new-education"
                            key={index}
                        >
                            <div className="add-new-education-text">
                                <input
                                    type="text"
                                    name="collegeName"
                                    value={education.institute}
                                    onChange={(event) =>
                                        handleInputChangeByIndex(index, event)
                                    }
                                    placeholder="Institute Name"
                                />
                                <input
                                    type="text"
                                    name="degreeName"
                                    value={education.degree}
                                    onChange={(event) =>
                                        handleInputChangeByIndex(index, event)
                                    }
                                    placeholder="Degree Name"
                                />
                                <input
                                    type="number"
                                    name="percentage"
                                    value={education.percentage}
                                    onChange={(event) =>
                                        handleInputChangeByIndex(index, event)
                                    }
                                    placeholder="Percentage"
                                />
                                <input
                                    type="text"
                                    name="year"
                                    value={education.year}
                                    onChange={(event) =>
                                        handleInputChangeByIndex(index, event)
                                    }
                                    placeholder="Year"
                                />
                                <button
                                    className="education-delete"
                                    type="button"
                                    onClick={() => handleDeleteByIndex(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                <Button
                    variant="contained"
                    className="education-add"
                    type="button"
                    onClick={handleAddByIndex}
                >
                    Add
                </Button>
                {/* End of Education */}
                {/* Form submit button */}
                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </form>
        </>
    );
}
