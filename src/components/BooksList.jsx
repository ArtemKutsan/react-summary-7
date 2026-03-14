// src/components/BooksList.jsx
import { connect } from 'react-redux';
import BookItem from './BookItem';

function BooksList({ books, onEdit }) {
  return (
    <div className="flex flex-col gap-4">
      {books.map((book) => (
        <BookItem key={book.id} book={book} onEdit={onEdit} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  books: state.bookStore.books,
});

export default connect(mapStateToProps, null)(BooksList);
