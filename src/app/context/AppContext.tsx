"use client";

import { createContext, useContext, useState } from "react";

export const AppContext = createContext<AppContextState>({
  activePage: "",
  setActivePage: () => {},
});

type AppContextProps = {
  children: React.ReactNode;
};

export type AppContextState = {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [activePage, setActivePage] = useState<string>("/");
  return (
    <AppContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </AppContext.Provider>
  );
};
