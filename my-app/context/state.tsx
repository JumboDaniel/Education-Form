import { createContext, useContext, useState } from 'react';
import {NameContext} from "../types/type"

export const AppContext = createContext<NameContext | null>(null);

export function NameContextProvider({ children }) {
const [name, setName] = useState<NameContext>()

  return (
    <AppContext.Provider value={{name, setName}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
// function userName() {

// }

