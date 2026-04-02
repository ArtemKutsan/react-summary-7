import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addReaderAction } from '../redux/actions/bookStore';

function ReaderForm({ addReader }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    addReader(data);
    reset();
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
        <span className="w-8 h-8 bg-linear-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center shadow-[0_4px_12px_rgba(236,72,153,0.30)]">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        </span>
        Добавить читателя
      </h3>

      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-3 flex-1">
        <div>
          <input
            type="text"
            placeholder="Имя читателя..."
            {...register('name', { required: 'Имя обязательно' })}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-pink-500 focus:bg-white focus:outline-none transition-colors"
          />
          {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Email..."
            {...register('email', { required: 'Email обязателен' })}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-pink-500 focus:bg-white focus:outline-none transition-colors"
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="mt-auto w-full bg-linear-to-r from-pink-500 to-rose-600 text-white font-medium py-2.5 px-4 rounded-lg shadow-[0_4px_14px_rgba(236,72,153,0.35)] hover:shadow-[0_6px_20px_rgba(236,72,153,0.45)] transition-all duration-300 text-sm"
        >
          Добавить
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addReader: (data) => dispatch(addReaderAction(data)),
});

export default connect(null, mapDispatchToProps)(ReaderForm);
