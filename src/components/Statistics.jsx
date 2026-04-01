import { connect } from 'react-redux';

function Statistics({ statistics }) {
  return (
    <div className="bg-white rounded-lg p-6 border border-slate-200">
      <h3 className="text-lg font-semibold mb-4">Статистика</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-50 rounded-md p-4">
          <div className="text-sm text-slate-500">Всего книг</div>
          <div className="text-2xl font-bold">{statistics.totalBooks}</div>
        </div>
        <div className="bg-slate-50 rounded-md p-4">
          <div className="text-sm text-slate-500">Доступно</div>
          <div className="text-2xl font-bold text-green-600">{statistics.availableBooks}</div>
        </div>
        <div className="bg-slate-50 rounded-md p-4">
          <div className="text-sm text-slate-500">Выдано</div>
          <div className="text-2xl font-bold text-blue-600">{statistics.borrowedBooks}</div>
        </div>
        <div className="bg-slate-50 rounded-md p-4">
          <div className="text-sm text-slate-500">Активных читателей</div>
          <div className="text-2xl font-bold">{statistics.activeReadersCount}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-50 rounded-md p-4">
          <div className="text-sm text-slate-500 mb-2">Книги по десятилетиям</div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(statistics.booksByDecade)
              .sort(([a], [b]) => a - b)
              .map(([decade, count]) => (
                <span
                  key={decade}
                  className="inline-flex items-center gap-1 bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm"
                >
                  {decade}-е: {count}
                </span>
              ))}
          </div>
        </div>

        <div className="bg-slate-50 rounded-md p-4">
          <div className="text-sm text-slate-500 mb-2">Самый популярный автор</div>
          {statistics.mostPopularAuthor.name ? (
            <div>
              <div className="font-medium">{statistics.mostPopularAuthor.name}</div>
              <div className="text-sm text-slate-500">
                {statistics.mostPopularAuthor.booksCount} кн.
              </div>
            </div>
          ) : (
            <div className="text-slate-400">Нет данных</div>
          )}
        </div>
      </div>

      {!statistics.consistencyCheck && (
        <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-md text-sm">
          Ошибка целостности данных
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  statistics: state.bookStore.statistics,
});

export default connect(mapStateToProps, null)(Statistics);
