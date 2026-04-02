import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { returnBookAction } from '../redux/actions/bookStore';

function ReturnForm({ returnBook }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ bookId, readerId }) => {
    returnBook(bookId, readerId);
    reset();
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
        <span className="w-8 h-8 bg-linear-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-[0_4px_12px_rgba(16,185,129,0.30)]">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            />
          </svg>
        </span>
        Вернуть книгу
      </h3>

      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-3 flex-1">
        <div>
          <input
            type="text"
            placeholder="ID книги..."
            {...register('bookId', { required: 'ID книги обязателен' })}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-emerald-500 focus:bg-white focus:outline-none transition-colors"
          />
          {errors.bookId && (
            <span className="text-red-500 text-xs mt-1">{errors.bookId.message}</span>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="ID читателя..."
            {...register('readerId', { required: 'ID читателя обязателен' })}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-emerald-500 focus:bg-white focus:outline-none transition-colors"
          />
          {errors.readerId && (
            <span className="text-red-500 text-xs mt-1">{errors.readerId.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="mt-auto w-full bg-linear-to-r from-emerald-500 to-teal-600 text-white font-medium py-2.5 px-4 rounded-lg shadow-[0_4px_14px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.45)] transition-all duration-300 text-sm"
        >
          Вернуть
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  returnBook: (bookId, readerId) => dispatch(returnBookAction(bookId, readerId)),
});

export default connect(null, mapDispatchToProps)(ReturnForm);
