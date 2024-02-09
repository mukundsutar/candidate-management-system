import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";
import { useAtom } from "jotai";
import CandidateList, { candID } from "./Components/CandidateList";
import CandidateAddNew from "./Components/CandidateAddNew";
import CandidateEdit from "./Components/CandidateEdit";
import Header from "./Components/Header";

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
                    path="/candidate/:candidateId/edit"
                    element={
                        <>
                            <CandidateEdit />
                        </>
                    }
                />

                <Route
                    path="/candidate/:candidateId"
                    element={<HomePage newFlag={false} />}
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
