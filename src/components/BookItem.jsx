import { connect } from 'react-redux';
import { removeBookAction } from '../redux/actions/bookStore';

function BookItem({ book, removeBook, onEdit }) {
  return (
    <div className="group flex flex-wrap gap-3 items-center bg-white rounded-xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:border-violet-200 transition-all duration-300">
      <div className="flex-1 min-w-[200px]">
        <div className="font-semibold text-slate-800">{book.title}</div>
        <div className="text-sm text-slate-500">
          {book.author} • {book.year}
        </div>
        <div className="text-xs text-slate-400 mt-0.5">ID: {book.id}</div>
      </div>

      <div
        className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
          book.isAvailable
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
            : 'bg-orange-50 text-orange-700 border border-orange-100'
        }`}
      >
        {book.isAvailable ? '✓ В наличии' : '○ Выдана'}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(book)}
          className="px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
        >
          Ред.
        </button>
        <button
          onClick={() => removeBook(book.id)}
          className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeBook: (bookId) => dispatch(removeBookAction(bookId)),
});

export default connect(null, mapDispatchToProps)(BookItem);
