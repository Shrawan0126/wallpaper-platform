import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.slug}`} className="rounded-2xl border border-slate-800 bg-slate-900 p-4 hover:border-cyan-500 transition">
      <h4 className="font-semibold">{category.name}</h4>
      <p className="text-sm text-slate-400">{category.description}</p>
    </Link>
  );
}
