import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';




export default function PaginatedItems({ itemsPerPage, pageCount, currentItems }) {
     
    const handlePageClick = (event) => {    
    currentItems.setCurrentPage(event.selected+1);
    
  };

  return (
    <div className='my-3'>
      <ReactPaginate
       className='flex flex-row justify-end gap-3'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
