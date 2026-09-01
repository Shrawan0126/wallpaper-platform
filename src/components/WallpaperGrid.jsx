import LoadingSkeleton from './LoadingSkeleton'
import WallpaperCard from './WallpaperCard'

function WallpaperGrid({ wallpapers, loading = false, onToggleFavorite, isFavorite }) {
  if (loading) {
    return <LoadingSkeleton count={6} />
  }

  if (wallpapers.length === 0) {
    return (
      <div className="glass rounded-2xl p-8 text-center text-slate-300">
        No wallpapers matched your filters. Try changing search or sorting.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {wallpapers.map((wallpaper) => (
        <WallpaperCard
          key={wallpaper.id}
          wallpaper={wallpaper}
          onToggleFavorite={onToggleFavorite}
          favorite={isFavorite(wallpaper.id)}
        />
      ))}
    </div>
  )
}

export default WallpaperGrid
