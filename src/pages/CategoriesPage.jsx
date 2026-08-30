import CategoryCard from '../components/CategoryCard'
import { categories } from '../data/categories'
import { wallpapers } from '../data/wallpapers'

function CategoriesPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-semibold text-white">Explore Categories</h1>
      <p className="text-slate-400">Browse curated themes designed for desktop and mobile displays.</p>

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
  )
}

export default CategoriesPage
