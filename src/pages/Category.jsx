import { useParams } from "react-router-dom";
import WallpaperGrid from "../components/wallpaper/WallpaperGrid";
import { wallpapers } from "../data/wallpapers";

export default function Category() {
  const { slug } = useParams();
  const items = wallpapers.filter(w => w.category.toLowerCase() === slug?.toLowerCase());
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold capitalize">{slug}</h1>
      <WallpaperGrid items={items} />
    </div>
  );
}
