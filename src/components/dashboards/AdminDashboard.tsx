import React from "react";
import styles from "./styles.module.css"

const AdminDashboard: React.FC = () => {
    return (
      <div className={styles.dashboardcontainer}>
        <h2>Admin</h2>
            <div className={styles.Adminbuttons}>
                <button style={{ margin: "5px", backgroundColor: "gainsboro", padding: "7px", borderRadius: "5px", border:"none"}}>Manage Users</button>
                <button style={{ margin: "5px", backgroundColor: "gainsboro", padding: "7px", borderRadius: "5px", border:"none"}}>Settings</button>
                <button style={{ margin: "5px", backgroundColor: "gainsboro", padding: "7px", borderRadius: "5px", border:"none"}}>View Logs</button>
            </div>
            <div>
                <h3>Project Statistics</h3>
                <ul>
                    <li>Total Projects: 10</li>
                    <li>Active Projects: 3</li>
                    <li>Pending Projects: 4</li>
                    <li>Completed Projects: 3</li>
                </ul>
            </div>
        </div>
    );
};
export default AdminDashboard;
