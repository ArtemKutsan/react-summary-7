import Meta from '../../components/Meta';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Meta title="Главная" />

      <div className="container max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 text-center">
          <div className="w-20 h-20 bg-linear-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-[0_8px_25px_rgba(139,92,246,0.35)] mx-auto mb-6">
            <svg
              className="w-10 h-10 text-white"
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

          <h1 className="text-3xl font-bold text-slate-800 mb-2">React Summary 14</h1>
          <h2 className="text-xl text-slate-600 mb-6">Приложение BookStore на React с Redux</h2>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/books"
              className="inline-flex items-center gap-2 bg-linear-to-r from-violet-500 to-purple-600 text-white font-medium py-3 px-6 rounded-xl shadow-[0_4px_14px_rgba(139,92,246,0.35)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.45)] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Перейти в Books
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 font-medium py-3 px-6 rounded-xl hover:bg-slate-200 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              О приложении
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
