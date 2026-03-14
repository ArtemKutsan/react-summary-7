// src/redux/actions/books.js
export const BOOK_ADD = 'BOOK_ADD';
export const BOOK_REMOVE = 'BOOK_REMOVE';
export const BOOK_UPDATE_INFO = 'BOOK_UPDATE_INFO';
export const BOOK_TOGGLE_AVAILABILITY = 'BOOK_TOGGLE_AVAILABILITY';

export const addBookAction = (bookData) => ({
  type: BOOK_ADD,
  payload: {
    ...bookData,
    id: crypto.randomUUID(),
    isAvailable: bookData.isAvailable ?? true,
  },
});

export const updateBookAction = (bookData) => ({
  type: BOOK_UPDATE_INFO,
  payload: bookData,
});

export const removeBookAction = (bookId) => ({
  type: BOOK_REMOVE,
  payload: { bookId },
});

export const toggleBookAvailabilityAction = (bookId) => ({
  type: BOOK_TOGGLE_AVAILABILITY,
  payload: { bookId },
});
