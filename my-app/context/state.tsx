import { createContext, useContext, useState } from 'react';

// NOTE(add the interface fir the Name context)
interface NameContext{
  name: string;
}

export const AppContext = createContext<NameContext | null>(null);

export function NameContextProvider({ children }) {
//   let sharedState = userName();
const [name, setName] = useState<NameContext>('')

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

