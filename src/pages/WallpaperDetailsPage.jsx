import { Link, useParams } from 'react-router-dom'
import DownloadButton from '../components/DownloadButton'
import WallpaperGrid from '../components/WallpaperGrid'
import { wallpapers } from '../data/wallpapers'
import { useFavorites } from '../hooks/useFavorites'
import { getRelatedWallpapers } from '../utils/wallpaperUtils'

function WallpaperDetailsPage() {
  const { id } = useParams()
  const wallpaper = wallpapers.find((item) => item.id === id)
  const { toggleFavorite, isFavorite } = useFavorites()

  if (!wallpaper) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <h1 className="mb-2 text-2xl font-semibold text-white">Wallpaper Not Found</h1>
        <Link to="/search" className="text-accent-400">
          Back to Search
        </Link>
      </div>
    )
  }

  const related = getRelatedWallpapers(wallpaper, wallpapers)

  return (
    <div className="space-y-6">
      <section className="glass overflow-hidden rounded-3xl">
        <img src={wallpaper.imageUrl} alt={wallpaper.title} className="h-[280px] w-full object-cover sm:h-[420px]" />
        <div className="space-y-4 p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-white">{wallpaper.title}</h1>
              <p className="mt-2 max-w-2xl text-slate-400">{wallpaper.description}</p>
            </div>
            <button
              type="button"
              onClick={() => toggleFavorite(wallpaper.id)}
              className={`rounded-full px-4 py-2 text-sm ${isFavorite(wallpaper.id) ? 'bg-rose-500/20 text-rose-300' : 'bg-white/10 text-slate-200'}`}
            >
              {isFavorite(wallpaper.id) ? 'Saved to Favorites' : 'Add to Favorites'}
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="glass rounded-xl p-3 text-sm">
              <p className="text-slate-400">Resolution</p>
              <p className="text-white">{wallpaper.resolution}</p>
            </div>
            <div className="glass rounded-xl p-3 text-sm">
              <p className="text-slate-400">Format</p>
              <p className="text-white">{wallpaper.format}</p>
            </div>
            <div className="glass rounded-xl p-3 text-sm">
              <p className="text-slate-400">Downloads</p>
              <p className="text-white">{wallpaper.downloads.toLocaleString()}</p>
            </div>
            <div className="glass rounded-xl p-3 text-sm">
              <p className="text-slate-400">Likes</p>
              <p className="text-white">{wallpaper.likes.toLocaleString()}</p>
            </div>
          </div>

          <DownloadButton wallpaper={wallpaper} />

          <div className="flex flex-wrap gap-2">
            {wallpaper.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Related Wallpapers</h2>
        <WallpaperGrid wallpapers={related} onToggleFavorite={toggleFavorite} isFavorite={isFavorite} />
      </section>
    </div>
  )
}

export default WallpaperDetailsPage
