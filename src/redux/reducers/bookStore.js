// src/redux/reducers/bookStore.js
import {
  BOOK_ADD,
  BOOK_REMOVE,
  BOOK_UPDATE_INFO,
  BOOK_TOGGLE_AVAILABILITY,
  READER_ADD,
  READER_REMOVE,
  BOOK_LEND_TO_READER,
  BOOK_RETURN_FROM_READER,
} from '../actions/bookStore';

function calculateStatistics(books, readers) {
  const totalBooks = books.length;
  const availableBooks = books.filter((book) => book.isAvailable).length;
  const borrowedBooks = books.filter((book) => !book.isAvailable).length;

  const booksByDecade = books.reduce((acc, book) => {
    const decade = Math.floor(book.year / 10) * 10;
    acc[decade] = (acc[decade] || 0) + 1;
    return acc;
  }, {});

  const activeReadersCount = readers.filter((reader) => reader.borrowedBooks.length > 0).length;

  const authorCounts = books.reduce((acc, book) => {
    acc[book.author] = (acc[book.author] || 0) + 1;
    return acc;
  }, {});

  let mostPopularAuthor = { name: '', booksCount: 0 };
  for (const [author, count] of Object.entries(authorCounts)) {
    if (count > mostPopularAuthor.booksCount) {
      mostPopularAuthor = { name: author, booksCount: count };
    }
  }

  const totalBorrowedInReaders = readers.reduce(
    (sum, reader) => sum + reader.borrowedBooks.length,
    0,
  );

  const consistencyCheck =
    availableBooks + borrowedBooks === totalBooks && totalBorrowedInReaders === borrowedBooks;

  if (!consistencyCheck) {
    console.warn('Statistics consistency check failed!', {
      totalBooks,
      availableBooks,
      borrowedBooks,
      sum: availableBooks + borrowedBooks,
      totalBorrowedInReaders,
    });
  }

  return {
    totalBooks,
    availableBooks,
    borrowedBooks,
    booksByDecade,
    activeReadersCount,
    mostPopularAuthor,
    consistencyCheck,
  };
}

const initialState = {
  books: [
    {
      id: crypto.randomUUID().slice(0, 4),
      title: '1984',
      author: 'Джордж Оруэлл',
      year: '1949',
      isAvailable: true,
    },
    {
      id: crypto.randomUUID().slice(0, 4),
      title: '451° по Фаренгейту',
      author: 'Рэй Брэдбери',
      year: '1953',
      isAvailable: true,
    },
    {
      id: crypto.randomUUID().slice(0, 4),
      title: 'Атлант расправил плечи',
      author: 'Айн Рэнд',
      year: '1957',
      isAvailable: true,
    },
  ],
  lastUpdated: null,
  // Task 2
  readers: [
    {
      id: crypto.randomUUID().slice(0, 4),
      name: 'Artem',
      email: 'artem@gmail.com',
      borrowedBooks: [],
    },
  ],
  // Task 3
  statistics: {
    totalBooks: 3,
    availableBooks: 3,
    borrowedBooks: 0,
    booksByDecade: { 1940: 1, 1950: 2 },
    activeReadersCount: 0,
    mostPopularAuthor: { name: 'Джордж Оруэлл', booksCount: 1 },
    consistencyCheck: true,
  },
};

const bookStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ADD:
      return {
        ...state,
        books: [...state.books, action.payload],
        lastUpdated: new Date().toISOString(),
        statistics: calculateStatistics([...state.books, action.payload], state.readers),
      };

    case BOOK_REMOVE: {
      const newBooks = state.books.filter((book) => book.id !== action.payload.bookId);
      return {
        ...state,
        books: newBooks,
        lastUpdated: new Date().toISOString(),
        statistics: calculateStatistics(newBooks, state.readers),
      };
    }

    case BOOK_UPDATE_INFO:
      const updatedBooks = state.books.map((book) =>
        book.id === action.payload.id
          ? {
              ...book,
              ...action.payload,
            }
          : book,
      );
      return {
        ...state,
        books: updatedBooks,
        lastUpdated: new Date().toISOString(),
        statistics: calculateStatistics(updatedBooks, state.readers),
      };

    case BOOK_TOGGLE_AVAILABILITY:
      const toggledBooks = state.books.map((book) =>
        book.id === action.payload.bookId ? { ...book, isAvailable: !book.isAvailable } : book,
      );
      return {
        ...state,
        books: toggledBooks,
        lastUpdated: new Date().toISOString(),
        statistics: calculateStatistics(toggledBooks, state.readers),
      };

    // Task 2
    case READER_ADD:
      return {
        ...state,
        readers: [...state.readers, action.payload],
        lastUpdated: new Date().toISOString(),
        statistics: calculateStatistics(state.books, [...state.readers, action.payload]),
      };

    case READER_REMOVE: {
      const readerToRemove = state.readers.find((reader) => reader.id === action.payload.readerId);

      if (!readerToRemove || readerToRemove.borrowedBooks.length) {
        console.log('Невозможно удалить: у читателя есть книги');
        return state;
      }

      const newReaders = state.readers.filter((reader) => reader.id !== action.payload.readerId);
      return {
        ...state,
        readers: newReaders,
        lastUpdated: new Date().toISOString(),
        statistics: calculateStatistics(state.books, newReaders),
      };
    }

    case BOOK_LEND_TO_READER: {
      const { bookId, readerId } = action.payload;

      const bookToLend = state.books.find((book) => book.id === bookId);
      const readerToBorrow = state.readers.find((reader) => reader.id === readerId);

      if (!bookToLend || !readerToBorrow || !bookToLend.isAvailable) return state;

      const newBooks = state.books.map((book) =>
        book.id === bookId ? { ...book, isAvailable: false } : book,
      );
      const newReaders = state.readers.map((reader) =>
        reader.id === readerId
          ? {
              ...reader,
              borrowedBooks: [...reader.borrowedBooks, bookId],
            }
          : reader,
      );

      return {
        ...state,
        books: newBooks,
        readers: newReaders,
        lastUpdated: new Date().toISOString(),
        statistics: calculateStatistics(newBooks, newReaders),
      };
    }

    case BOOK_RETURN_FROM_READER: {
      const { bookId, readerId } = action.payload;

      const readerReturningBook = state.readers.find((reader) => reader.id === readerId);

      if (!readerReturningBook || !readerReturningBook.borrowedBooks.includes(bookId)) {
        return state;
      }

      const newBooks = state.books.map((book) =>
        book.id === bookId ? { ...book, isAvailable: true } : book,
      );
      const newReaders = state.readers.map((reader) =>
        reader.id === readerId
          ? {
              ...reader,
              borrowedBooks: reader.borrowedBooks.filter((id) => id !== bookId),
            }
          : reader,
      );

      return {
        ...state,
        books: newBooks,
        readers: newReaders,
        lastUpdated: new Date().toISOString(),
        statistics: calculateStatistics(newBooks, newReaders),
      };
    }

    default:
      return state;
  }
};

export default bookStoreReducer;
