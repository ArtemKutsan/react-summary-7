function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-linear-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center shadow-[0_4px_12px_rgba(139,92,246,0.30)]">
              <svg
                className="w-4 h-4 text-white"
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
            <span className="text-sm font-semibold text-slate-700">BookStore</span>
          </div>

          <p className="text-sm text-slate-500">© 2026. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
