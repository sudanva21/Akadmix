import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext(null);

const ADMIN_PASSWORD = 'akadmix987';

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (password) => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AdminContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export default AdminContext;
