import { Link } from 'react-router-dom';
import Nav from '../Nav';

function Header() {
  return (
    <header className="bg-white border-b border-slate-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-linear-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-[0_4px_14px_rgba(139,92,246,0.35)] group-hover:shadow-[0_6px_20px_rgba(139,92,246,0.45)] transition-shadow">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-slate-800 group-hover:text-violet-600 transition-colors">
              BookStore
            </span>
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
