import { createContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const value = useMemo(() => ({
    favorites,
    toggleFavorite: (id) =>
      setFavorites((prev) => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }), [favorites, setFavorites]);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
