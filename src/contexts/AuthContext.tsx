import React, { createContext, useState, useEffect, ReactNode } from 'react';

export type User = {
  name: string;
  email: string;
};

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {}
});

// Function to validate login credentials. It is exported for unit testing purposes.
export const validateLogin = (email: string, password: string): boolean => {
  // Hardcoded credentials for demonstration
  return email === 'user@example.com' && password === 'password';
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    if (validateLogin(email, password)) {
      const userData = { name: 'User Name', email };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
