import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="list-header">
                {/* back to login page */}
                <NavLink to="/login">
                    <Button variant="contained" sx={
                        {ml:7}
                    }>Sign Out</Button>
                </NavLink>
            </div>
        </>
    );
}
