import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate exact from="/" to="/login" />}
                />

                <Route
                    path="/login"
                    element={
                        <div className="app-container">
                            <LoginPage />
                        </div>
                    }
                />

                <Route path="/home" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;
