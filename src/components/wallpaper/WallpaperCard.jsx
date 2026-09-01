import { Link } from "react-router-dom";

export default function WallpaperCard({ item }) {
  return (
    <Link to={`/wallpaper/${item.id}`} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <img src={item.imageUrl} alt={item.title} className="h-44 w-full object-cover group-hover:scale-105 transition" />
      <div className="p-3">
        <h4 className="font-semibold">{item.title}</h4>
        <p className="text-xs text-slate-400">{item.category} • {item.resolution}</p>
      </div>
    </Link>
  );
}
