import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, UserRole } from "../contexts/AuthContext";
 
const LoginPage: React.FC=() => {
    const [username, setUsername] = useState("");
    const [role, setRole] = useState<UserRole>("Viewer");
    const { login } =useAuth();
    const navigate = useNavigate();


const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim() === ""){
        alert("Enter a username");
        return;
    }

    // login user
    login({ username, role });
    navigate ("/dashboard");
};

return(
    <div>
        <h2>Login To Project Management Tool </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label><input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label>Role:</label>
                <select value={role} onChange={ (e) => setRole(e.target.value as UserRole)}>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                </select>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
);

};
export default LoginPage;