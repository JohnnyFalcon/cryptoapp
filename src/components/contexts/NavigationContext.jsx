import { createContext, useState } from "react";

export const NavigationContext = createContext({
  selected: "",
  setSelected: () => ""
});

export const NavigationProvider = ({ children }) => {
  const [selected, setSelected] = useState("");
  const value = {
    selected,
    setSelected
  };
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
