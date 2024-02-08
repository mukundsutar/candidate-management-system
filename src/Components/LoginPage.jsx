import React from "react";
import "../css/login-page.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
    return (
        <>
            <div className="login-container">
                {/* title */}
                <p className="login-title">Login here...</p>

                {/* userID input box */}
                <input
                    className="login-ele login-input"
                    type="text"
                    name="userID"
                    id="userID"
                />

                {/* password input box */}
                <input
                    className="login-ele login-input"
                    type="text"
                    name="password"
                    id="password"
                />

                {/* submit button */}
                <NavLink to="/candidate">
                    <input
                        id="login-submit"
                        className="login-ele login-btn"
                        type="button"
                        value="submit"
                    />
                </NavLink>

                {/* register button */}
                <input
                    className="login-ele login-btn"
                    type="button"
                    value="register"
                />

                {/* social login buttons */}
                <div className="social-login">
                    <button type="button">
                        <i
                            className="bi bi-google"
                            style={{ fontSize: "2rem" }}
                        ></i>
                    </button>
                    <button type="button">
                        <i
                            className="bi bi-linkedin"
                            style={{ fontSize: "2rem" }}
                        ></i>
                    </button>
                    <button type="button">
                        <i
                            className="bi bi-facebook"
                            style={{ fontSize: "2rem" }}
                        ></i>
                    </button>
                    <button type="button">
                        <i
                            className="bi bi-github"
                            style={{ fontSize: "2rem" }}
                        ></i>
                    </button>
                </div>
            </div>
        </>
    );
}
