import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, [navigate]);

  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 text-center">
        <div className="w-20 h-20 bg-linear-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-[0_8px_25px_rgba(249,115,22,0.35)] mx-auto mb-6">
          <span className="text-4xl">⚠️</span>
        </div>

        <h1 className="text-2xl font-bold text-slate-800 mb-2">Страница не найдена</h1>
        <p className="text-slate-500 mb-2">
          Страница{' '}
          <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">{location.pathname}</code> не
          существует
        </p>
        <p className="text-slate-400 text-sm mb-6">
          Вы будете перенаправлены на главную через 3 секунды
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-linear-to-r from-violet-500 to-purple-600 text-white font-medium py-2.5 px-6 rounded-xl shadow-[0_4px_14px_rgba(139,92,246,0.35)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.45)] transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          На главную
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
