import { Stack } from '@chakra-ui/react';
import { Controls, GoToPage, PageSize } from './subcomponents';

const Pagination = ({
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  gotoPage,
  pageSize,
  setPageSize,
  pageIndex,
  pageOptions
}) => {
  const totalPages = pageOptions?.length || 1;

  return (
    <Stack alignItems='center' direction='row' justifyContent="space-between">
      <GoToPage gotoPage={gotoPage} totalPages={totalPages} />
      <Controls
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        gotoPage={gotoPage}
        pageIndex={pageIndex}
        totalPages={totalPages}
      />
      <PageSize pageSize={pageSize} setPageSize={setPageSize} />
    </Stack>
  )
}

export default Pagination;