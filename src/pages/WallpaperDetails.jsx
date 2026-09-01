import { useParams } from "react-router-dom";
import { wallpapers } from "../data/wallpapers";
import DownloadButton from "../components/wallpaper/DownloadButton";

export default function WallpaperDetails() {
  const { id } = useParams();
  const item = wallpapers.find(w => w.id === id);

  if (!item) return <div className="p-8">Wallpaper not found.</div>;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <img src={item.imageUrl} alt={item.title} className="w-full rounded-2xl border border-slate-800" />
      <h1 className="mt-4 text-3xl font-bold">{item.title}</h1>
      <p className="mt-2 text-slate-300">{item.description}</p>
      <div className="mt-4"><DownloadButton onClick={() => window.open(item.downloadUrl, "_blank")} /></div>
    </div>
  );
}
