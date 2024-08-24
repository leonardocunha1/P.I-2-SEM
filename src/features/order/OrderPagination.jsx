function OrderPagination({ currentPage, totalPages, onPageChange, children }) {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="mt-auto flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row sm:gap-0">
      <div className="flex items-center gap-2 font-semibold">
        <button
          className="h-8 w-8"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          &larr;
        </button>
        <button
          className="h-8 w-8"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          &rarr;
        </button>

        <span>
          Página {currentPage} de {totalPages}
        </span>
      </div>
      {children}
    </div>
  );
}

export default OrderPagination;
