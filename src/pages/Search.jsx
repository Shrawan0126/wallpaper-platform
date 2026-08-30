import { useMemo, useState } from "react";
import SearchBar from "../components/common/SearchBar";
import FilterPanel from "../components/common/FilterPanel";
import WallpaperGrid from "../components/wallpaper/WallpaperGrid";
import { wallpapers } from "../data/wallpapers";
import { sortWallpapers } from "../utils/sort";

export default function Search() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("latest");

  const items = useMemo(() => {
    const filtered = wallpapers.filter(w =>
      [w.title, w.category, ...(w.tags || [])].join(" ").toLowerCase().includes(q.toLowerCase())
    );
    return sortWallpapers(filtered, sort);
  }, [q, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 grid lg:grid-cols-[260px_1fr] gap-6">
      <FilterPanel>
        <label className="text-sm text-slate-300">Sort</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="mt-1 w-full rounded bg-slate-800 p-2">
          <option value="latest">Latest</option>
          <option value="downloads">Most Downloaded</option>
          <option value="likes">Most Liked</option>
          <option value="az">A-Z</option>
        </select>
      </FilterPanel>
      <div className="space-y-4">
        <SearchBar value={q} onChange={(e) => setQ(e.target.value)} />
        <WallpaperGrid items={items} />
      </div>
    </div>
  );
}
