import WallpaperCard from "./WallpaperCard";

export default function WallpaperGrid({ items = [] }) {
  if (!items.length) return <p className="text-slate-400">No wallpapers found.</p>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item) => <WallpaperCard key={item.id} item={item} />)}
    </div>
  );
}
