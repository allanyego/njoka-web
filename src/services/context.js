import { useContext, createContext } from "react";

export const AppContext = createContext({
  notifications: [],
  user: null,
});

export function useAppContext() {
  return useContext(AppContext);
}
