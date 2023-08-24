import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface UserCreatedContextProps {
    userCreated: boolean;
    toggleUserCreated: (newUserCreated: boolean) => void;
}

const UserCreatedContext = createContext<UserCreatedContextProps | undefined>(undefined);

interface UserCreatedProviderProps {
    children: ReactNode;
}

export const UserCreatedProvider: React.FC<UserCreatedProviderProps> = ({ children }) => {
  const storedUserCreated = localStorage.getItem("userCreated");
  const [userCreated, setUserCreated] = useState(storedUserCreated === "true" || false);

  useEffect(() => {
    localStorage.setItem("userCreated", userCreated.toString());
  }, [userCreated]);

  const toggleUserCreated = (newUserCreated: boolean) => {
    setUserCreated(newUserCreated);
  };

  return (
    <UserCreatedContext.Provider
      value={{ userCreated, toggleUserCreated }}
    >
      {children}
    </UserCreatedContext.Provider>
  );
};

export const useUserCreated = () => {
  const context = useContext(UserCreatedContext);
  if (!context) {
    throw new Error("useUserCreated must be used within a UserCreatedProvider");
  }
  return context;
};
