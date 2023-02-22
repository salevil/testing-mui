import React, { createContext } from "react";
import useClickCount from "../hooks/useClickCount";

export const ClickCountContext = createContext();

export function ClickCountProvider({ children }) {
  const [count, setCount] = useClickCount();

  return (
    <ClickCountContext.Provider value={{ count, setCount }}>
      {children}
    </ClickCountContext.Provider>
  );
}