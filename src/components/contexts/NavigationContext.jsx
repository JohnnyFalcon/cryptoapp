import { createContext, useState } from "react";

export const NavigationContext = createContext({
  selected: "",
  setSelected: () => "",
  selectedCrypto: false,
  setSelectedCrypto: () => ""
});

export const NavigationProvider = ({ children }) => {
  const [selected, setSelected] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState(false);

  const value = {
    selected,
    selectedCrypto,
    setSelected,
    setSelectedCrypto
  };
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
