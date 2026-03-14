// src/components/LendForm.jsx
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { lendBookAction } from '../redux/actions/bookStore';

function LendBookForm({ lendBook }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    lendBook(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4 max-w-60">
      <input
        type="text"
        placeholder="Укажите id книги..."
        {...register('bookId', { required: 'id выдаваемой книги обязателен' })}
      />
      {errors.bookId && <span className="text-red-500">{errors.bookId.message}</span>}

      <input
        type="text"
        placeholder="Укажите id читателя..."
        {...register('readerId', { required: 'id читателя обязателен' })}
      />
      {errors.readerId && <span className="text-red-500">{errors.readerId.message}</span>}

      <button className="button-primary">Выдать</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  lendBook: ({ bookId, readerId }) => dispatch(lendBookAction(bookId, readerId)),
});

export default connect(null, mapDispatchToProps)(LendBookForm);
