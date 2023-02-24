"use client";

import { usePathname } from "next/navigation";
import { createContext, useState } from "react";

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
  const pathName = usePathname();
  const [activePage, setActivePage] = useState<string>(pathName);
  return (
    <AppContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </AppContext.Provider>
  );
};
