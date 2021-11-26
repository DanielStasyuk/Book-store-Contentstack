import React from "react";
import "../App.css";


const Pagination = (props) => {
  const { data, skip, setSkip } = props;
  return (
    <div
      className='pagination-buttons'
    >
      {data && skip !== 0 && skip > 0 && (
        <button className="btn" onClick={() => setSkip((prev) => prev - 4)}>
          Previous
        </button>
      )}
      {data &&
        data.all_book_shelf.total >= skip &&
        data.all_book_shelf.items.length === 4 && (
          <button className="btn" onClick={() => setSkip((prev) => prev + 4)}>
            Next
          </button>
        )}
    </div>
  );
};

export default Pagination;
