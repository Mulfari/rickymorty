import React from 'react';
import './styles/Pagination.css';

const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handleClick = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`page-number ${i === currentPage ? 'active' : ''}`}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => handleClick(currentPage > 1 ? currentPage - 1 : currentPage)}
      >
        Anterior
      </button>
      {renderPageNumbers()}
      <button
        className="pagination-button"
        onClick={() => handleClick(currentPage < totalPages ? currentPage + 1 : currentPage)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
