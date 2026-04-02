import { connect } from 'react-redux';
import { useState } from 'react';
import Meta from '../../components/Meta';
import BookForm from '../../components/BookForm';
import ReaderForm from '../../components/ReaderForm';
import LendForm from '../../components/LendForm';
import ReturnForm from '../../components/ReturnForm';
import BooksList from '../../components/BooksList';
import ReadersList from '../../components/ReadersList';
import Statistics from '../../components/Statistics';

function BooksPage({ books, readers }) {
  const [editingBook, setEditingBook] = useState(null);

  return (
    <>
      <Meta title="BookStore" />
      <div className="container max-w-6xl mx-auto px-6 py-8">
        <Statistics />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <BookForm editingBook={editingBook} setEditingBook={setEditingBook} />
          <ReaderForm />
          <LendForm />
          <ReturnForm />
        </div>

        {books.length !== 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-linear-to-b from-violet-500 to-purple-600 rounded-full"></span>
              Список книг
            </h3>
            <BooksList onEdit={setEditingBook} />
          </div>
        )}

        {readers.length !== 0 && (
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-linear-to-b from-pink-500 to-rose-600 rounded-full"></span>
              Список читателей
            </h3>
            <ReadersList />
          </div>
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
