import { useMemo } from 'react'
import { buildSuggestions } from '../utils/wallpaperUtils'

export function useSearchSuggestions(query, wallpapers, categories) {
  return useMemo(
    () => buildSuggestions(wallpapers, categories, query),
    [categories, query, wallpapers],
  )
}
