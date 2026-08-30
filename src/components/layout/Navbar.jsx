import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">WallpaperHub</Link>
        <nav className="flex gap-4 text-sm text-slate-200">
          <Link to="/categories">Categories</Link>
          <Link to="/search">Search</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
