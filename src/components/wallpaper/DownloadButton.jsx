export default function DownloadButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 font-medium"
    >
      Download
    </button>
  );
}
