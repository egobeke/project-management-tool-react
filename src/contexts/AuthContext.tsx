import React, {createContext, useState, useContext,ReactNode} from "react";

// user type
export type UserRole = "Admin" | "Editor" | "Viewer";

export interface User {
    username: string
    role: UserRole;
}

// AuthContext type
interface AuthContextType {
    user: User | null;
    login: ( user:User) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode}>= ({children})=> {
    const [user,setUser] = useState<User | null>(null);

    // function that handles login and logout
    const login = (userData: User) => { setUser(userData);}

    const logout = () => { setUser(null);};

    return (
        <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>
    );
};

// custom hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error ("useAuth must be used within an AuthProvider");
    }
    return context;
    };


