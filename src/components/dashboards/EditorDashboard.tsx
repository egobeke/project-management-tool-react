import React from "react";
import styles from "./styles.module.css"

const EditorDashboard: React.FC =() => {
    return (
        <div className={styles.dashboardcontainer}>
            <h2>Editor</h2>
                <div>
                    <h3>Assigned Projects</h3>
                    <ul>
                        <li>Write New Blog - Due in 5 days</li>
                        <li>Edit Videos -Due in 10 days</li>
                        <li>Interview New Interns -Due tomorrow</li>
                        <li>Submit Research On New Products -Due in a month</li>
                    </ul>
                </div>
                <div>
                    <button style={{ margin: "5px", backgroundColor: "gainsboro", padding: "7px", borderRadius: "5px", border:"none"}}>New Project</button>
                    <button style={{ margin: "5px", backgroundColor: "gainsboro", padding: "7px", borderRadius: "5px", border:"none"}}>Edit Existing Project</button>
                </div>
            </div>
    );
};

export default EditorDashboard;