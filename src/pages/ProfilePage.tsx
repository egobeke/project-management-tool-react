import React from "react";
import { useAuth } from "../contexts/AuthContext";
import styles from "./styles.module.css"

const ProfilePage: React.FC = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1>Profile Page</h1>
            {user && (
                <div className={styles.profilepage}>
                    <h2 style={{textAlign:"center",marginTop:20, marginBottom:30, padding:20 }}>User Information</h2>
                    <p style={{fontSize:22}}><strong>Username:</strong> {user.username}</p>
                    <p style={{fontSize:22}}><strong>Role: </strong>{user.role}</p>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;