import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    return (
      <MyContext.Provider value="Ma">
        {children}
      </MyContext.Provider>
    );
  };
