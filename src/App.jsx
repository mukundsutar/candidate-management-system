import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";

function App() {
    const newFlag = false;

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

                <Route path="/candidate" element={<HomePage />} />
                <Route
                    path="/candidate/*"
                    element={<HomePage newFlag={newFlag} />}
                />
                <Route
                    path="/candidate/new"
                    element={
                        <>
                            <HomePage newFlag={true} />
                        </>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
