const Pagination = ({ page, setPage }) => {
  const totalPages = 30; // or dynamic from API

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage); // ✅ State change triggered by event
    }
  };

  return (
    <div className="flex justify-center gap-2 mt-4 align-center">
      <button
        onClick={() => handlePageChange(page - 1)}
        className="px-3 py-1 bg-pink-500 rounded disabled:opacity-50"
        disabled={page === 1}
      >
        Prev
      </button>
      <span className="justify-center">{page}</span>
      <button
        onClick={() => handlePageChange(page + 1)}
        className="px-3 py-1 bg-pink-500 rounded disabled:opacity-50"
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
