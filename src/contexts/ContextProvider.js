import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState({});


  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{loggedInUser, setLoggedInUser, activeMenu, setActiveMenu, screenSize, setScreenSize, }}>
      {children}
    </StateContext.Provider>
  );
};


export const useStateContext = () => useContext(StateContext);
