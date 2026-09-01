import { useMemo, useState } from 'react'
import { filterDefaults, filterWallpapers, sortWallpapers } from '../utils/wallpaperUtils'

export function useWallpaperFilters(wallpapers, query = '', preset = {}) {
  const [filters, setFilters] = useState({ ...filterDefaults, ...preset })

  const filteredWallpapers = useMemo(() => {
    const results = filterWallpapers(wallpapers, filters, query)
    return sortWallpapers(results, filters.sortBy)
  }, [filters, query, wallpapers])

  const updateFilter = (name, value) => {
    setFilters((current) => ({ ...current, [name]: value }))
  }

  const resetFilters = () => {
    setFilters({ ...filterDefaults, ...preset })
  }

  return {
    filters,
    filteredWallpapers,
    updateFilter,
    resetFilters,
  }
}
