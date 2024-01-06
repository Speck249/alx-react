import React from 'react';

const AppContext = React.createContext();

export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export const defaultLogOut = () => {
  const updatedUser = { 
    ...defaultUser,
    isLoggedIn: false
  };

  localStorage.removeItem('user');
  return updatedUser;
};

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
