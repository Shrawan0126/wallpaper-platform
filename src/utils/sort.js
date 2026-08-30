export function sortWallpapers(items, mode) {
  const arr = [...items];
  switch (mode) {
    case "downloads": return arr.sort((a,b) => b.downloads - a.downloads);
    case "likes": return arr.sort((a,b) => b.likes - a.likes);
    case "az": return arr.sort((a,b) => a.title.localeCompare(b.title));
    default: return arr;
  }
}
