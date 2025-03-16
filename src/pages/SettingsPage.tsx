import React from "react";
import styles from "./styles.module.css"

const SettingsPage: React.FC = () => {
    return (
        <div>
            <h1>Settings Page</h1>
            <div>
            <h2>Admin Settings</h2>
            <div className={styles.settingpgcontainer}>
            <h3>General Settings</h3>
            <div>
                <label>Website Name:</label><input type="text" defaultValue="Project Management Tool" style={{width:300,padding:8}}/>
            </div>
            </div>
            </div>
            <div>
            <h3>Advanced Settings</h3>
            <div className={styles.settingpgcontainer}>
                <label>Theme:</label>
                <select>
                    <option>Dark</option>
                    <option>Deep Blue</option>
                    <option>Light</option>
                    <option>System Default</option>
                </select>
            </div>
            </div>
            <div>
                <h4>Other Settings</h4>
                <div className={styles.settingpgcontainer}>
                    <label className={styles.notification}>
                        <input type="checkbox" defaultChecked className={styles.notificationcheckbox}/>Turn on notification
                    </label>
                </div>
            </div>
            <div className={styles.btncontainer}>
            <button className={styles.settingbtn}>Save Settings</button>
            </div>
        </div>
    );
};
export default SettingsPage;