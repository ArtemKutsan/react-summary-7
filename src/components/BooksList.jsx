// src/components/BooksList/index.jsx
import { connect } from 'react-redux';
import BookItem from './BookItem';

function BooksList({ booksList, onEdit }) {
  return (
    <div className="flex flex-col gap-4">
      {booksList.map((book) => (
        <BookItem key={book.id} book={book} onEdit={onEdit} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  booksList: state.books.booksList,
});

export default connect(mapStateToProps, null)(BooksList);
