import { motion } from 'framer-motion'
import CategoryCard from '../components/CategoryCard'
import HeroSection from '../components/HeroSection'
import WallpaperGrid from '../components/WallpaperGrid'
import { categories } from '../data/categories'
import { wallpapers } from '../data/wallpapers'
import { useFavorites } from '../hooks/useFavorites'

function HomePage() {
  const { toggleFavorite, isFavorite } = useFavorites()

  const featured = wallpapers.filter((wallpaper) => wallpaper.featured).slice(0, 6)
  const trending = wallpapers.filter((wallpaper) => wallpaper.trending).slice(0, 6)

  return (
    <div className="space-y-10">
      <HeroSection />

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white">Featured Collection</h2>
          <p className="text-sm text-slate-400">Editor-picked wallpaper sets</p>
        </div>
        <WallpaperGrid wallpapers={featured} onToggleFavorite={toggleFavorite} isFavorite={isFavorite} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Popular Categories</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              count={wallpapers.filter((wallpaper) => wallpaper.category === category.slug).length}
            />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white">Trending Right Now</h2>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-full bg-accent-500/20 px-3 py-1 text-xs text-accent-300"
          >
            Live Signal
          </motion.span>
        </div>
        <WallpaperGrid wallpapers={trending} onToggleFavorite={toggleFavorite} isFavorite={isFavorite} />
      </section>
    </div>
  )
}

export default HomePage
