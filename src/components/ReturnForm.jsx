// src/components/ReturnForm.jsx
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
    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4 max-w-60">
      <input
        type="text"
        placeholder="id книги..."
        {...register('bookId', { required: 'id книги обязателен' })}
      />
      {errors.bookId && <span className="text-red-500">{errors.bookId.message}</span>}

      <input
        type="text"
        placeholder="id читателя..."
        {...register('readerId', { required: 'id читателя обязателен' })}
      />
      {errors.readerId && <span className="text-red-500">{errors.readerId.message}</span>}

      <button className="button-primary">Вернуть</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  returnBook: (bookId, readerId) => dispatch(returnBookAction(bookId, readerId)),
});

export default connect(null, mapDispatchToProps)(ReturnForm);
