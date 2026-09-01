import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function CategoryCard({ category, count }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="glass overflow-hidden rounded-2xl">
      <img src={category.coverImage} alt={category.name} className="h-40 w-full object-cover" loading="lazy" />
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-white">{category.name}</h3>
        <p className="mb-3 text-sm text-slate-400">{category.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">{count} wallpapers</span>
          <Link to={`/categories/${category.slug}`} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
            Explore
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default CategoryCard
