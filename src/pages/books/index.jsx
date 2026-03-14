// src/pages/book-store/index.jsx
import { connect } from 'react-redux';
import { useState } from 'react';
import Meta from '../../components/Meta';
import BookForm from '../../components/BookForm';
import ReaderForm from '../../components/ReaderForm';
import LendForm from '../../components/LendForm';
import ReturnForm from '../../components/ReturnForm';
import BooksList from '../../components/BooksList';
import ReadersList from '../../components/ReadersList';

function BooksPage({ books, readers }) {
  const [editingBook, setEditingBook] = useState(null);

  return (
    <>
      <Meta title="BookStore" />
      <div className="container max-w-5xl prose">
        <div className="flex flex-wrap gap-8">
          <div className="flex-1">
            <h3>Добавить книгу</h3>
            <BookForm editingBook={editingBook} setEditingBook={setEditingBook} />
          </div>
          <div className="flex-1">
            <h3>Добавить читателя</h3>
            <ReaderForm />
          </div>
          <div className="flex-1">
            <h3>Выдать книгу</h3>
            <LendForm />
          </div>
          <div className="flex-1">
            <h3>Вернуть книгу</h3>
            <ReturnForm />
          </div>
        </div>

        {books.length !== 0 && (
          <>
            <h3>Список книг</h3>
            <BooksList onEdit={setEditingBook} />
          </>
        )}

        {readers.length !== 0 && (
          <>
            <h3>Список читателей</h3>
            <ReadersList />
          </>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  books: state.bookStore.books,
  readers: state.bookStore.readers,
});

export default connect(mapStateToProps, null)(BooksPage);
