import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";
import { useAtom } from "jotai";
import { candID } from "./Components/CandidateList";

function App() {
    const [candidateId] = useAtom(candID);

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
                    path="/candidate/:candidateId"
                    element={<HomePage newFlag={true} />}
                />

                <Route
                    path="/candidate/new"
                    element={
                        <>
                            <HomePage newFlag={false} />
                        </>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
