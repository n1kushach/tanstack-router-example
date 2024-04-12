import React, { useRef } from 'react';
import { createContext } from 'react';
import { proxy } from 'valtio';

export interface AuthContextType {
  id: number | null;
  username: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  image: string | null;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const state = useRef<AuthContextType | null>(
    proxy({
      id: null,
      username: null,
      email: null,
      firstName: null,
      lastName: null,
      gender: null,
      image: null,
      token: null,
    })
  ).current;
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthContext;
