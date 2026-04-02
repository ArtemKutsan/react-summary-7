import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addBookAction, updateBookAction } from '../redux/actions/bookStore';
import { useEffect } from 'react';

function BookForm({ editingBook, addBook, updateBook, setEditingBook }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (editingBook) {
      reset({
        title: editingBook.title,
        author: editingBook.author,
        year: editingBook.year,
        isAvailable: editingBook.isAvailable,
      });
    } else {
      reset({
        title: '',
        author: '',
        year: '',
        isAvailable: true,
      });
    }
  }, [editingBook, reset]);

  const submitHandler = (data) => {
    if (editingBook) {
      updateBook({
        id: editingBook.id,
        ...data,
      });
      setEditingBook(null);
    } else {
      addBook(data);
    }

    reset();
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
        <span className="w-8 h-8 bg-linear-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center shadow-[0_4px_12px_rgba(139,92,246,0.30)]">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </span>
        {editingBook ? 'Редактировать книгу' : 'Добавить книгу'}
      </h3>

      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-3 flex-1">
        <div>
          <input
            type="text"
            placeholder="Название книги..."
            {...register('title', { required: 'Название обязательно' })}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-violet-500 focus:bg-white focus:outline-none transition-colors"
          />
          {errors.title && (
            <span className="text-red-500 text-xs mt-1">{errors.title.message}</span>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Автор книги..."
            {...register('author', { required: 'Автор обязателен' })}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-violet-500 focus:bg-white focus:outline-none transition-colors"
          />
          {errors.author && (
            <span className="text-red-500 text-xs mt-1">{errors.author.message}</span>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Год издания..."
            {...register('year', {
              required: 'Год обязателен',
              pattern: {
                value: /^[0-9]{4}$/,
                message: 'Введите корректный год (4 цифры)',
              },
            })}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-violet-500 focus:bg-white focus:outline-none transition-colors"
          />
          {errors.year && <span className="text-red-500 text-xs mt-1">{errors.year.message}</span>}
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            {...register('isAvailable')}
            className="w-4 h-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
          />
          Есть в наличии
        </label>

        <button
          type="submit"
          className="mt-auto w-full bg-linear-to-r from-violet-500 to-purple-600 text-white font-medium py-2.5 px-4 rounded-lg shadow-[0_4px_14px_rgba(139,92,246,0.35)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.45)] transition-all duration-300 text-sm"
        >
          {editingBook ? 'Сохранить' : 'Добавить'}
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addBook: (bookData) => dispatch(addBookAction(bookData)),
  updateBook: (bookData) => dispatch(updateBookAction(bookData)),
});

export default connect(null, mapDispatchToProps)(BookForm);
