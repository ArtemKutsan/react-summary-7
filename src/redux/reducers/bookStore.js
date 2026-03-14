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
      isAvailable: false,
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
    totalBooks: 0, // всего книг
    availableBooks: 0, // доступно сейчас
    borrowedBooks: 0, // выдано всего
    booksByDecade: {
      1950: 0,
      1960: 0,
      1970: 0,
      // и т.д.
    },
    activeReadersCount: 0, // читатели с книгами на руках
    mostPopularAuthor: {
      // Cамый популярный автор
      name: '',
      booksCount: 0,
    },
  },
};

const bookStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ADD:
      return {
        ...state,
        books: [...state.books, action.payload],
        lastUpdated: new Date().toISOString(),
      };

    case BOOK_REMOVE: {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.bookId),
        lastUpdated: new Date().toISOString(),
      };
    }

    case BOOK_UPDATE_INFO:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id
            ? {
                ...book,
                ...action.payload,
              }
            : book,
        ),
        lastUpdated: new Date().toISOString(),
      };

    case BOOK_TOGGLE_AVAILABILITY:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.bookId ? { ...book, isAvailable: !book.isAvailable } : book,
        ),
        lastUpdated: new Date().toISOString(),
      };

    // Task 2
    case READER_ADD:
      return {
        ...state,
        readers: [...state.readers, action.payload],
        lastUpdated: new Date().toISOString(),
      };

    case READER_REMOVE: {
      const readerToRemove = state.readers.find((reader) => reader.id === action.payload.readerId);

      if (!readerToRemove || readerToRemove.borrowedBooks.length) {
        console.log('Невозможно удалить: у читателя есть книги');
        return state;
      }

      return {
        ...state,
        readers: state.readers.filter((reader) => reader.id !== action.payload.readerId),
        lastUpdated: new Date().toISOString(),
      };
    }

    case BOOK_LEND_TO_READER: {
      const { bookId, readerId } = action.payload;

      const bookToLend = state.books.find((book) => book.id === bookId);
      const readerToBorrow = state.readers.find((reader) => reader.id === readerId);

      if (!bookToLend || !readerToBorrow || !bookToLend.isAvailable) return state;

      return {
        ...state,
        books: state.books.map((book) =>
          book.id === bookId ? { ...book, isAvailable: false } : book,
        ),
        readers: state.readers.map((reader) =>
          reader.id === readerId
            ? {
                ...reader,
                borrowedBooks: [...reader.borrowedBooks, bookId],
              }
            : reader,
        ),
        lastUpdated: new Date().toISOString(),
      };
    }

    case BOOK_RETURN_FROM_READER: {
      const { bookId, readerId } = action.payload;

      const readerReturningBook = state.readers.find((reader) => reader.id === readerId);

      if (!readerReturningBook || !readerReturningBook.borrowedBooks.includes(bookId)) {
        return state;
      }

      return {
        ...state,
        books: state.books.map((book) =>
          book.id === bookId ? { ...book, isAvailable: true } : book,
        ),

        readers: state.readers.map((reader) =>
          reader.id === readerId
            ? {
                ...reader,
                borrowedBooks: reader.borrowedBooks.filter((id) => id !== bookId),
              }
            : reader,
        ),

        lastUpdated: new Date().toISOString(),
      };
    }

    default:
      return state;
  }
};

export default bookStoreReducer;
