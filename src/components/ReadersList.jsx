// src/components/BooksList.jsx
import { connect } from 'react-redux';
import ReaderItem from './ReaderItem';

function ReadersList({ readers }) {
  return (
    <div className="flex flex-col gap-4">
      {readers.map((reader) => (
        <ReaderItem key={reader.id} reader={reader} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  readers: state.bookStore.readers,
});

export default connect(mapStateToProps, null)(ReadersList);
