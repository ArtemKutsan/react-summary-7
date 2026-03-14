// src/redux/actions/bookStore.js
export const BOOK_ADD = 'BOOK_ADD';
export const BOOK_REMOVE = 'BOOK_REMOVE';
export const BOOK_UPDATE_INFO = 'BOOK_UPDATE_INFO';
export const BOOK_TOGGLE_AVAILABILITY = 'BOOK_TOGGLE_AVAILABILITY';

// Task 2
export const READER_ADD = 'READER_ADD';
export const READER_REMOVE = 'READER_REMOVE';
export const BOOK_LEND_TO_READER = 'BOOK_LEND_TO_READER';

export const addBookAction = (bookData) => ({
  type: BOOK_ADD,
  payload: {
    ...bookData,
    id: crypto.randomUUID().slice(0, 4),
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

// Task 2
export const addReaderAction = (readerData) => ({
  type: READER_ADD,
  payload: { ...readerData, id: crypto.randomUUID().slice(0, 4), borrowedBooks: [] },
});

export const removeReaderAction = (readerId) => ({
  type: READER_REMOVE,
  payload: { readerId },
});

export const lendBookAction = (bookId, readerId) => ({
  type: BOOK_LEND_TO_READER,
  payload: { bookId, readerId },
});
