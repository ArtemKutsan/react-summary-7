import { connect } from 'react-redux';

function Statistics({ statistics }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Статистика библиотеки</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="group relative bg-white rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-linear-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-[0_6px_20px_rgba(139,92,246,0.35)]">
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
            </div>
            <div className="text-sm font-medium text-slate-500 mb-1">Всего книг</div>
            <div className="text-3xl font-bold text-slate-800">{statistics.totalBooks}</div>
          </div>
        </div>

        <div className="group relative bg-white rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-[0_6px_20px_rgba(16,185,129,0.35)]">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-sm font-medium text-slate-500 mb-1">Доступно</div>
            <div className="text-3xl font-bold text-emerald-600">{statistics.availableBooks}</div>
          </div>
        </div>

        <div className="group relative bg-white rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-[0_6px_20px_rgba(249,115,22,0.35)]">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-sm font-medium text-slate-500 mb-1">Выдано</div>
            <div className="text-3xl font-bold text-orange-600">{statistics.borrowedBooks}</div>
          </div>
        </div>

        <div className="group relative bg-white rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 to-rose-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-linear-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-[0_6px_20px_rgba(236,72,153,0.35)]">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-sm font-medium text-slate-500 mb-1">Читателей</div>
            <div className="text-3xl font-bold text-pink-600">{statistics.activeReadersCount}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-linear-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_6px_16px_rgba(99,102,241,0.30)]">
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-700">Книги по десятилетиям</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(statistics.booksByDecade)
              .sort(([a], [b]) => a - b)
              .map(([decade, count]) => (
                <span
                  key={decade}
                  className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-50 to-blue-50 text-indigo-700 px-4 py-2 rounded-xl text-sm font-medium border border-indigo-100"
                >
                  <span className="w-2 h-2 bg-linear-to-br from-indigo-400 to-blue-500 rounded-full"></span>
                  {decade}-е: <span className="font-bold">{count}</span>
                </span>
              ))}
            {Object.keys(statistics.booksByDecade).length === 0 && (
              <span className="text-slate-400 text-sm">Нет данных</span>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-linear-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center shadow-[0_6px_16px_rgba(244,63,94,0.30)]">
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
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-700">Популярный автор</h3>
          </div>
          {statistics.mostPopularAuthor.name ? (
            <div className="flex items-center gap-4 p-4 bg-linear-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-100">
              <div className="w-14 h-14 bg-linear-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-[0_8px_25px_rgba(244,63,94,0.35)] text-2xl">
                📚
              </div>
              <div className="flex-1">
                <div className="font-bold text-slate-800 text-lg">
                  {statistics.mostPopularAuthor.name}
                </div>
                <div className="text-sm text-slate-500 mt-0.5">
                  <span className="inline-flex items-center gap-1.5 font-medium text-rose-600">
                    <span className="w-5 h-5 bg-rose-100 rounded-full flex items-center justify-center text-xs">
                      📖
                    </span>
                    {statistics.mostPopularAuthor.booksCount} книг
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-slate-400 text-sm">Нет данных</div>
          )}
        </div>
      </div>

      {!statistics.consistencyCheck && (
        <div className="mt-6 bg-linear-to-r from-red-500 to-rose-600 text-white px-5 py-4 rounded-2xl text-sm font-medium shadow-[0_8px_25px_rgba(239,68,68,0.35)] flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
            <span>⚠️</span>
          </div>
          <span>Ошибка целостности данных</span>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  statistics: state.bookStore.statistics,
});

export default connect(mapStateToProps, null)(Statistics);
