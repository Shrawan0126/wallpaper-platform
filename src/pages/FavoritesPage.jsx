import WallpaperGrid from '../components/WallpaperGrid'
import { wallpapers } from '../data/wallpapers'
import { useFavorites } from '../hooks/useFavorites'

function FavoritesPage() {
  const { favoriteIds, toggleFavorite, isFavorite } = useFavorites()
  const favoriteWallpapers = wallpapers.filter((wallpaper) => favoriteIds.includes(wallpaper.id))

  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-semibold text-white">Your Favorites</h1>
      <p className="text-slate-400">Saved wallpapers are synced in your browser localStorage.</p>
      <WallpaperGrid
        wallpapers={favoriteWallpapers}
        onToggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
    </section>
  )
}

export default FavoritesPage
