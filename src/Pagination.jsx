import React from 'react';
import { Link } from 'react-router-dom';
// import './Pagination.css';

const Pagination = ({ currentPage, totalPages }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {currentPage > 1 && <Link to={`/page/${currentPage - 1}`}>Previous</Link>}
      {pageNumbers.slice(currentPage - 1, currentPage + 9).map((pageNumber) => (
        <Link key={pageNumber} to={`/page/${pageNumber}`} className={pageNumber === currentPage ? 'active' : ''}>
          {pageNumber}
        </Link>
      ))}
      {currentPage < totalPages && <Link to={`/page/${currentPage + 1}`}>Next</Link>}
    </div>
  );
};

export default Pagination;
