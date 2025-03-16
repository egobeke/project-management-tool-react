import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./styles.module.css"

const Navbar: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout =() => {
        logout();
        navigate("/login");
    };
    
    if (!user) return null;

    return (
        <nav className={styles.navbar} >
            <div className={styles.navbarcontent}>
                <div>
                    <span>Project Management Tool</span>
                </div>
                <div className={styles.link}>
                    <Link to="/login">Login</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/profile">Profile</Link>
                    {/* only Admin users can access settings */}
                    {user.role === "Admin" && <Link to="/settings">Settings</Link>}
                    <div>
                        <span>{user.username} ({user.role})</span>
                        </div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;