import React, { ReactNode } from "react";
import {Navigate} from "react-router-dom";
import { useAuth, UserRole } from "../contexts/AuthContext";

interface ProtectedRouteProps {
    children: ReactNode;
    requiredRole?: UserRole;
}
 

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children, requiredRole}) => {
    const { user } = useAuth();

// if user is not authenticated , redirect to login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // if user doesnt have a required specific role , redirect to dashboard
    if (requiredRole && user.role  !== requiredRole) {
        return <Navigate to="/dashboard" replace />;
    }

    // when all conditions are met
    return <>{children}</>;
};
export default ProtectedRoute;