// src/components/ReaderItem.jsx
import { connect } from 'react-redux';
import { removeReaderAction } from '../redux/actions/bookStore';

function ReaderItem({ reader, books, removeReader }) {
  return (
    <div className="flex flex-wrap gap-2 items-center border border-slate-200 p-2 pl-4 rounded-lg bg-white">
      <span>{reader.name},</span>
      <span>{reader.email},</span>
      <span>{reader.id}</span>
      {reader.borrowedBooks.length != 0 &&
        reader.borrowedBooks.map((bookId) => {
          const borrowedBook = books.find((book) => book.id === bookId);
          return <span key={bookId}>, {borrowedBook?.title}</span>;
        })}
      <div className="flex gap-2 ml-auto text-sm">
        <button className="button-secondary" onClick={() => removeReader(reader.id)}>
          Удалить
        </button>
      </div>
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
