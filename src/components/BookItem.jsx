// src/components/BookItem.jsx
import { connect } from 'react-redux';
import { removeBookAction } from '../redux/actions/bookStore';

function BookItem({ book, removeBook, onEdit }) {
  return (
    <div className="flex flex-wrap gap-2 items-center border border-slate-200 p-2 pl-4 rounded-lg bg-white">
      <span>{book.title},</span>
      <span>{book.author},</span>
      <span>{book.year},</span>
      <span>{book.isAvailable ? 'Есть в наличии' : 'Нет в наличии'}, </span>
      <span>{book.id}</span>

      <div className="flex gap-2 ml-auto text-sm">
        <button className="button-secondary" onClick={() => onEdit(book)}>
          Редактировать
        </button>
        <button className="button-secondary" onClick={() => removeBook(book.id)}>
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
