// src/redux/reducers/books.js
import {
  BOOK_ADD,
  BOOK_REMOVE,
  BOOK_UPDATE_INFO,
  BOOK_TOGGLE_AVAILABILITY,
} from '../actions/books';

const initialState = {
  booksList: [
    {
      id: crypto.randomUUID(),
      title: '1984',
      author: 'Джордж Оруэлл',
      year: '1949',
      isAvailable: true,
    },
    {
      id: crypto.randomUUID(),
      title: '451° по Фаренгейту',
      author: 'Рэй Брэдбери',
      year: '1953',
      isAvailable: true,
    },
    {
      id: crypto.randomUUID(),
      title: 'Атлант расправил плечи',
      author: 'Айн Рэнд',
      year: '1957',
      isAvailable: false,
    },
  ],
  lastUpdated: null,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ADD:
      return {
        ...state,
        booksList: [...state.booksList, action.payload],
        lastUpdated: new Date().toISOString(),
      };

    case BOOK_UPDATE_INFO:
      return {
        ...state,
        booksList: state.booksList.map((book) =>
          book.id === action.payload.id
            ? {
                ...book,
                ...action.payload,
              }
            : book,
        ),
        lastUpdated: new Date().toISOString(),
      };

    case BOOK_REMOVE: {
      return {
        ...state,
        booksList: state.booksList.filter((book) => book.id !== action.payload.bookId),
        lastUpdated: new Date().toISOString(),
      };
    }

    case BOOK_TOGGLE_AVAILABILITY:
      return {
        ...state,
        booksList: state.booksList.map((book) =>
          book.id === action.payload.bookId ? { ...book, isAvailable: !book.isAvailable } : book,
        ),
        lastUpdated: new Date().toISOString(),
      };

    default:
      return state;
  }
};

export default booksReducer;
