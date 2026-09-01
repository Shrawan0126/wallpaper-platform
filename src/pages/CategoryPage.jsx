import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import FilterPanel from '../components/FilterPanel'
import WallpaperGrid from '../components/WallpaperGrid'
import { categories } from '../data/categories'
import { wallpapers } from '../data/wallpapers'
import { useFavorites } from '../hooks/useFavorites'
import { useWallpaperFilters } from '../hooks/useWallpaperFilters'

function CategoryPage() {
  const { slug } = useParams()
  const category = categories.find((item) => item.slug === slug)
  const categoryWallpapers = useMemo(
    () => wallpapers.filter((wallpaper) => wallpaper.category === slug),
    [slug],
  )

  const { filters, filteredWallpapers, updateFilter, resetFilters } = useWallpaperFilters(
    categoryWallpapers,
    '',
    { category: slug ?? 'all' },
  )

  const { toggleFavorite, isFavorite } = useFavorites()

  if (!category) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <h1 className="mb-2 text-2xl font-semibold text-white">Category Not Found</h1>
        <Link to="/categories" className="text-accent-400">
          Back to Categories
        </Link>
      </div>
    )
  }

  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-semibold text-white">{category.name}</h1>
      <p className="text-slate-400">{category.description}</p>
      <FilterPanel
        filters={filters}
        onChange={updateFilter}
        onReset={resetFilters}
        categories={categories}
      />
      <WallpaperGrid
        wallpapers={filteredWallpapers}
        onToggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
    </section>
  )
}

export default CategoryPage
