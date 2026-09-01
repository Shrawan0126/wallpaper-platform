import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterPanel from '../components/FilterPanel'
import SearchBar from '../components/SearchBar'
import WallpaperGrid from '../components/WallpaperGrid'
import { categories } from '../data/categories'
import { wallpapers } from '../data/wallpapers'
import { useFavorites } from '../hooks/useFavorites'
import { useSearchSuggestions } from '../hooks/useSearchSuggestions'
import { useWallpaperFilters } from '../hooks/useWallpaperFilters'

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const query = searchParams.get('q') ?? ''

  const suggestions = useSearchSuggestions(query, wallpapers, categories)
  const { filters, filteredWallpapers, updateFilter, resetFilters } = useWallpaperFilters(
    wallpapers,
    query,
  )
  const { toggleFavorite, isFavorite } = useFavorites()

  const handleSearch = (value) => {
    setLoading(true)
    setSearchParams(value ? { q: value } : {})
    setTimeout(() => setLoading(false), 280)
  }

  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-semibold text-white">Search Wallpapers</h1>
      <SearchBar
        value={query}
        onSearch={handleSearch}
        suggestions={suggestions}
        placeholder="Search by title, category, tags, keywords..."
      />

      <FilterPanel
        filters={filters}
        onChange={updateFilter}
        onReset={resetFilters}
        categories={categories}
      />

      <p className="text-sm text-slate-400">{filteredWallpapers.length} wallpaper results</p>

      <WallpaperGrid
        wallpapers={filteredWallpapers}
        loading={loading}
        onToggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
    </section>
  )
}

export default SearchPage
