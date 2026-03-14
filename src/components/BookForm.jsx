// src/components/BookForm.jsx
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
    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4 max-w-60">
      <input
        type="text"
        placeholder="Укажите название книги..."
        {...register('title', { required: 'Название обязательно' })}
      />
      {errors.title && <span className="text-red-500">{errors.title.message}</span>}

      <input
        type="text"
        placeholder="Укажите автора книги..."
        {...register('author', { required: 'Автор обязателен' })}
      />
      {errors.author && <span className="text-red-500">{errors.author.message}</span>}

      <input
        type="text"
        placeholder="Укажите год издания..."
        {...register('year', {
          required: 'Год обязателен',
          pattern: {
            value: /^[0-9]{4}$/,
            message: 'Введите корректный год (4 цифры)',
          },
        })}
      />
      {errors.year && <span className="text-red-500">{errors.year.message}</span>}

      <label>
        <span>Есть в наличии: </span>
        <input type="checkbox" {...register('isAvailable')} />
      </label>

      <button className="button-primary">{editingBook ? 'Сохранить' : 'Добавить'}</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addBook: (bookData) => dispatch(addBookAction(bookData)),
  updateBook: (bookData) => dispatch(updateBookAction(bookData)),
});

export default connect(null, mapDispatchToProps)(BookForm);
