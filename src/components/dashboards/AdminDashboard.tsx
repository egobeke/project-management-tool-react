import React from "react";
import styles from "./styles.module.css"

const AdminDashboard: React.FC = () => {
    return (
      <div className={styles.dashboardcontainer}>
        <h2>Admin</h2>
            <div className={styles.Adminbuttons}>
                <button>Manage Users</button>
                <button>Settings</button>
                <button>View Logs</button>
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
