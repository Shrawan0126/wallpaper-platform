import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  const navigate = useNavigate()

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass relative overflow-hidden rounded-3xl p-7 sm:p-10"
    >
      <div className="absolute -right-24 -top-28 h-56 w-56 rounded-full bg-accent-500/35 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-400/30 blur-3xl" />

      <div className="relative max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent-400">Premium 4K Collection</p>
        <h1 className="mb-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
          Curated wallpapers with cinematic quality and modern depth.
        </h1>
        <p className="mb-7 text-slate-300">
          Discover handcrafted categories, trend-aware curation, and a polished download experience for every screen.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => navigate('/search')}
            className="rounded-full bg-accent-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-accent-400"
          >
            Explore Wallpapers
          </button>
          <button
            type="button"
            onClick={() => navigate('/categories')}
            className="glass rounded-full px-6 py-3 text-sm font-medium text-white"
          >
            Browse Categories
          </button>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSection
