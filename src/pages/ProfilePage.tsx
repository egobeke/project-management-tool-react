import React from "react";
import { useAuth } from "../contexts/AuthContext";

const ProfilePage: React.FC = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1>Profile Page</h1>
            {user && (
                <div>
                    <h2>User Information</h2>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Role: </strong>{user.role}</p>
                    <div>
                        <p> This is a simple profile page. In a real application, you would include more user info.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;