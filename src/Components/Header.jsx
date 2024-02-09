import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="list-header">
                {/* back to login page */}
                <NavLink to="/login">
                    <button className="login-page-btn" type="button">
                        Back to Login
                    </button>
                </NavLink>
            </div>
        </>
    );
}
