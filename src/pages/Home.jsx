import HeroSection from "../components/sections/HeroSection";
import WallpaperGrid from "../components/wallpaper/WallpaperGrid";
import { wallpapers } from "../data/wallpapers";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 space-y-8">
      <HeroSection />
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Featured</h2>
        <WallpaperGrid items={wallpapers} />
      </section>
    </div>
  );
}
