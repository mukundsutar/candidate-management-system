import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import CandidateList from "./CandidateList";
import MediaQuery from "react-responsive";
import AddIcon from "@mui/icons-material/Add";

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
                    <MediaQuery maxWidth={1224}>
                        <Button variant="contained" onClick={toggleDrawer}>
                            <MenuIcon />
                        </Button>

                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction="left"
                            size={250}
                            className="bla bla bla"
                        >
                            <CandidateList apiData={apiData} />
                        </Drawer>
                    </MediaQuery>
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
