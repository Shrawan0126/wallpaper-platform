export default function SearchBar({ value, onChange, placeholder = "Search wallpapers..." }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
    />
  );
}
