import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface UserLoginContextProps {
    userLogin: boolean;
    toggleUserLogin: (userLogin: boolean) => void;
}

const UserLoginContext = createContext<UserLoginContextProps | undefined>(undefined);

interface UserLoginProviderProps {
    children: ReactNode;
}

export const UserLoginProvider: React.FC<UserLoginProviderProps> = ({ children }) => {
    const storedUserLogin = localStorage.getItem("userLogin");
    const [userLogin, setUserLogin] = useState(storedUserLogin === "true" || false);

    useEffect(() => {
        localStorage.setItem("userLogin", userLogin.toString());
    }, [userLogin]);

    const toggleUserLogin = (newUserLogin: boolean) => {
        setUserLogin(newUserLogin);
    };

    return (
        <UserLoginContext.Provider value={{ userLogin, toggleUserLogin }}>
            {children}
        </UserLoginContext.Provider>
    );
};

export const useUserLogin = () => {
    const context = useContext(UserLoginContext);
    if (!context) {
        throw new Error("useUserLogin must be used within a UserLoginProvider");
    }
    return context;
};
