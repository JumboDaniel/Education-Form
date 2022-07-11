// src/context/state.js
import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export function NameContextProvider({ children }) {
//   let sharedState = userName();
const [name, setName] = useState('')

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

