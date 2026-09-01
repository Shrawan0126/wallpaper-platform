import { useEffect, useMemo, useState } from 'react'

const FAVORITES_KEY = 'premium-wallpaper-favorites'

const getInitialFavorites = () => {
  if (typeof window === 'undefined') return []

  const raw = localStorage.getItem(FAVORITES_KEY)
  if (!raw) return []

  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState(getInitialFavorites)

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds))
  }, [favoriteIds])

  const favoritesSet = useMemo(() => new Set(favoriteIds), [favoriteIds])

  const toggleFavorite = (id) => {
    setFavoriteIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  return {
    favoriteIds,
    favoritesSet,
    toggleFavorite,
    isFavorite: (id) => favoritesSet.has(id),
  }
}
