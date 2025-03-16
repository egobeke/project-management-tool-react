import React from "react";

const SettingsPage: React.FC = () => {
    return (
        <div>
            <h1>Settings Page</h1>
            <div>
            <h2>Admin Settings</h2>
            <div>
            <h3>General Settings</h3>
            <div>
                <label>Website Name:</label><input type="text" defaultValue="Project Management Tool"/>
            </div>
            </div>
            </div>
            <h3>Advanced Settings</h3>
            <div>
                <label>Theme:</label>
                <select>
                    <option>Dark</option>
                    <option>Deep Blue</option>
                    <option>Light</option>
                    <option>System Default</option>
                </select>
            </div>
            <div>
                <h4>Other Settings</h4>
                <div>
                    <label>
                        <input type="checkbox" defaultChecked/>Turn on notification
                    </label>
                </div>
            </div>
            <button>Save Settings</button>
        </div>
    );
};
export default SettingsPage;