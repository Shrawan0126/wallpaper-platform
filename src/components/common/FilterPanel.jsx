export default function FilterPanel({ children }) {
  return (
    <aside className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="mb-3 font-semibold">Filters</h3>
      {children ?? <p className="text-slate-400 text-sm">Add filter controls here.</p>}
    </aside>
  );
}
