import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import CandidateList from "./CandidateList";

export default function Header({ apiData }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <>
            <div className="list-header">
                {/* back to login page */}

                <div>
                    <Button variant="contained" onClick={toggleDrawer}>
                        <MenuIcon />
                    </Button>

                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction="left"
                        size={300}
                        className="bla bla bla"
                    >
                        <CandidateList apiData={apiData} />
                    </Drawer>
                </div>

                <NavLink to="/login">
                    <Button variant="contained" sx={{ ml: 7 }}>
                        Sign Out
                    </Button>
                </NavLink>
            </div>
        </>
    );
}
