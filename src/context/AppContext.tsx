"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ID {
  id: number;
  name: string;
}

type AppContextType = {
  Menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  navbarShortCuts: ID[];
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [Menu, setMenu] = useState<boolean>(false);

  const navbarShortCuts: ID[] = [
    { id: 0, name: "All" },
    { id: 1, name: "Music" },
    { id: 2, name: "Mixes" },
    { id: 3, name: "Telugu cinema" },
    { id: 4, name: "T-Series" },
    { id: 5, name: "Gaming" },
    { id: 6, name: "Indian Institutes of Technology" },
    { id: 7, name: "Live" },
    { id: 8, name: "Nani" },
    { id: 9, name: "Free Fire MAX" },
    { id: 10, name: "Physics" },
    { id: 11, name: "Recently uploaded" },
    { id: 12, name: "Watched" },
    { id: 13, name: "New to you" },
    { id: 14, name: "Technology" },
    { id: 15, name: "Sports" },
    { id: 16, name: "News" },
    { id: 17, name: "Coding" },
    { id: 18, name: "Movies" },
    { id: 19, name: "Trending" },
    { id: 20, name: "Education" },
    { id: 21, name: "Web Development" },
    { id: 22, name: "Artificial Intelligence" },
    { id: 23, name: "Podcasts" },
  ];

  const value = { Menu, setMenu, navbarShortCuts };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
