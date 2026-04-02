import { connect } from 'react-redux';
import { removeReaderAction } from '../redux/actions/bookStore';

function ReaderItem({ reader, books, removeReader }) {
  return (
    <div className="group flex flex-wrap gap-3 items-center bg-white rounded-xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:border-pink-200 transition-all duration-300">
      <div className="flex-1 min-w-[200px]">
        <div className="font-semibold text-slate-800">{reader.name}</div>
        <div className="text-sm text-slate-500">{reader.email}</div>
        <div className="text-xs text-slate-400 mt-0.5">ID: {reader.id}</div>
        {reader.borrowedBooks.length !== 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {reader.borrowedBooks.map((bookId) => {
              const borrowedBook = books.find((book) => book.id === bookId);
              return (
                <span
                  key={bookId}
                  className="inline-flex items-center px-2 py-0.5 bg-orange-50 text-orange-700 text-xs rounded-md border border-orange-100"
                >
                  📖 {borrowedBook?.title}
                </span>
              );
            })}
          </div>
        )}
      </div>

      <div
        className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
          reader.borrowedBooks.length === 0
            ? 'bg-slate-100 text-slate-600 border border-slate-200'
            : 'bg-pink-50 text-pink-700 border border-pink-100'
        }`}
      >
        {reader.borrowedBooks.length === 0 ? 'Нет книг' : `Книг: ${reader.borrowedBooks.length}`}
      </div>

      <button
        onClick={() => removeReader(reader.id)}
        className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
      >
        Удалить
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  books: state.bookStore.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeReader: (readerId) => dispatch(removeReaderAction(readerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReaderItem);
