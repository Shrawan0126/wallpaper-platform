import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function WallpaperCard({ wallpaper, onToggleFavorite, favorite }) {
  return (
    <motion.article whileHover={{ y: -5 }} className="glass overflow-hidden rounded-2xl">
      <Link to={`/wallpapers/${wallpaper.id}`} className="block">
        <img src={wallpaper.imageUrl} alt={wallpaper.title} className="h-52 w-full object-cover" loading="lazy" />
      </Link>

      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <Link to={`/wallpapers/${wallpaper.id}`} className="line-clamp-1 text-base font-semibold text-white">
            {wallpaper.title}
          </Link>
          <button
            type="button"
            onClick={() => onToggleFavorite(wallpaper.id)}
            className={`rounded-full px-2 py-1 text-xs ${favorite ? 'bg-rose-500/20 text-rose-300' : 'bg-white/10 text-slate-300'}`}
          >
            ♥
          </button>
        </div>

        <p className="mb-3 line-clamp-2 text-sm text-slate-400">{wallpaper.description}</p>

        <div className="mb-3 flex flex-wrap gap-2">
          {wallpaper.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-300">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{wallpaper.resolution}</span>
          <span>{wallpaper.downloads.toLocaleString()} downloads</span>
        </div>
      </div>
    </motion.article>
  )
}

export default WallpaperCard
