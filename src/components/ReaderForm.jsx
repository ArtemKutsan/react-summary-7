// src/components/ReaderForm.jsx
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
    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4 max-w-60">
      <input
        type="text"
        placeholder="Укажите имя..."
        {...register('name', { required: 'Имя обязательно' })}
      />
      {errors.name && <span className="text-red-500">{errors.name.message}</span>}

      <input
        type="text"
        placeholder="Укажите email читателя..."
        {...register('email', { required: 'Email обязателен' })}
      />
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}

      <button className="button-primary">Добавить</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addReader: (data) => dispatch(addReaderAction(data)),
});

export default connect(null, mapDispatchToProps)(ReaderForm);
