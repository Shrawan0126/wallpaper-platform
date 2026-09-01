import CategoryCard from "../components/wallpaper/CategoryCard";
import { categories } from "../data/categories";

export default function Categories() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Categories</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map(c => <CategoryCard key={c.id} category={c} />)}
      </div>
    </div>
  );
}
