import React from "react";
import { BrowserRouter as Router, Routes,Route,Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import DashboardPage from "./pages/DashboardPage";

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar/>
                <div>
                    <Routes>
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/dashboard" element={<ProtectedRoute> <DashboardPage/> </ProtectedRoute>} />
                        <Route path="/Profile" element={<ProtectedRoute> <ProfilePage/> </ProtectedRoute>}/>
                        <Route path="/Settings" element={<ProtectedRoute requiredRole="Admin"><SettingsPage/></ProtectedRoute>}/>
                        <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                        <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;