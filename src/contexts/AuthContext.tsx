import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { destroyCookie, parseCookies } from "nookies";

interface AuthContextProps {
    isAuthenticated: boolean;
    toggleAuth: (newIsAuthenticated: boolean) => void;
    authenticationError: boolean;
    toggleAuthError: (newAuthenticationError: boolean) => void;
    loginVerify: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    const [isAuthenticated, setIsAuthenticated] = useState(storedAuth === "true" || false);

    const storedAuthError = localStorage.getItem("authenticationError");
    const [authenticationError, setAuthenticationError] = useState(storedAuthError === "true" || false);

    async function loginVerify() {
        const { '@auth.token': token } = parseCookies();

        console.log("Passou")
        console.log(token)


        try {
            const response = await api.get('/users');
            console.log(response)
            console.log(response.data)
            console.log(response.data.msg)
            setIsAuthenticated(true);
            setAuthenticationError(false);

            console.log("OK")

            return true
        } catch (error) {
            setAuthenticationError(true);
            logout();

            console.log("Erro")

            return false
        }

    }

    async function logout() {
        try {
            destroyCookie(undefined, '@auth.token')
            setIsAuthenticated(false)
            window.location.href = '/login';
        } catch {}
    }

    useEffect(() => {
        localStorage.setItem("isAuthenticated", isAuthenticated.toString());
        localStorage.setItem("authenticationError", authenticationError.toString());
    }, [isAuthenticated, authenticationError]);

    const toggleAuth = (newIsAuthenticated: boolean) => {
        setIsAuthenticated(newIsAuthenticated);
    };

    const toggleAuthError = (newAuthenticationError: boolean) => {
        setAuthenticationError(newAuthenticationError);
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, toggleAuth, authenticationError, toggleAuthError, loginVerify }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};
