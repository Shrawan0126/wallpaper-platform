import { Link } from "react-router-dom";
export default function NotFound() {
  return <div className="p-8">404. <Link to="/" className="text-cyan-400">Go Home</Link></div>;
}
