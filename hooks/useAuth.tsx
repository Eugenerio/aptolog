"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

interface AuthContextProps {
  isAuthenticated: boolean;
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children?: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    "token",
    null
  );

  const logout = React.useCallback(() => {
    setAccessToken(null);
  }, [setAccessToken]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: accessToken != null,
        accessToken,
        setAccessToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
