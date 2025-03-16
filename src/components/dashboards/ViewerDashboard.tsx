import React from "react";
import styles from "./styles.module.css"

const ViewerDashboard: React.FC = () => {
    return (
        <div className={styles.dashboardcontainer}>
            <h2>Viewer</h2>
                    <h3>Project Status</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Status</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Interview New Interns</td>
                                <td>Completed</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>Write New Blog</td>
                                <td>In Progress</td>
                                <td>80%</td>
                            </tr>
                            <tr>
                                <td>Edit Videos</td>
                                <td>In progress</td>
                                <td>75%</td>
                            </tr>
                            <tr>
                                <td>Research On New Products</td>
                                <td>In Progress</td>
                                <td>30%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    );
};
export default ViewerDashboard;