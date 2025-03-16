import React from "react";
import { useAuth } from "../contexts/AuthContext";
import AdminDashboard from "../components/dashboards/AdminDashboard";
import EditorDashboard from "../components/dashboards/EditorDashboard";
import ViewerDashboard from "../components/dashboards/ViewerDashboard";
// import styles from "./styles.module.css"

const DashboardPage: React.FC = () => {
    const {user} = useAuth();

    const renderDashboard = () => {
        if (!user) return null;

        switch (user.role) {
            case "Admin":
                return<AdminDashboard/>;
            case "Editor":
                return<EditorDashboard/>;
            case "Viewer":
                return <ViewerDashboard/>;
            default:
                return <div>Unknown role</div>;            
        }
    };
    return (
        <div>
            <h1>Dashboard</h1>
            {renderDashboard()}
        </div>
    );
};
export default DashboardPage;