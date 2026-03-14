// src/pages/books/index.jsx
import { connect } from 'react-redux';
import { useState } from 'react';
import Meta from '../../components/Meta';
import BookForm from '../../components/BookForm';
import BooksList from '../../components/BooksList';

function BooksPage({ booksList }) {
  const [editingBook, setEditingBook] = useState(null);

  return (
    <>
      <Meta title="Books" />
      <div className="container max-w-3xl prose">
        <h3>Добавить книгу</h3>
        <BookForm editingBook={editingBook} setEditingBook={setEditingBook} />
        {booksList.length !== 0 && (
          <>
            <h3>Список книг</h3>
            <BooksList onEdit={setEditingBook} />
          </>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  booksList: state.books.booksList,
});

export default connect(mapStateToProps, null)(BooksPage);
