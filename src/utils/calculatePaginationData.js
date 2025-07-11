export const calculatePaginationData = (count, perPage, page) => {
  const totalPages = Math.ceil(count / perPage);
  const hasNextPage = Boolean(totalPages - page && totalPages > 0);
  const hasPreviousPage = page !== 1;

  return {
    page,
    perPage,
    totalItems: count,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
};
