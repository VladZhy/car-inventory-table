import { useMemo, useState, useEffect } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import { useCars, useColumns } from './hooks';
import { useLocalStorage } from '../globalHooks';
import { Stack } from '@chakra-ui/react';
import { Body, Header, Pagination } from './subcomponents';

const CarInventoryTable = () => {
  const [cars, setCars] = useLocalStorage('cars', []);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { fetchCars } = useCars();
  const { getColumns } = useColumns();
  const columns = useMemo(() => getColumns(cars, setCars), [cars]);
  const data = useMemo(() => cars, [cars]);

  useEffect(() => {
    if (!cars.length) {
      setIsLoading(true);
      fetchCars(setCars, setErrorMessage, setIsLoading);
    }
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    setPageSize,
    pageOptions,
    state,
    setGlobalFilter
  } = useTable(
    { columns, data },
    useGlobalFilter,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  return (
    <Stack spacing={3} m={4}>
      <Header
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        cars={cars}
        setCars={setCars}
      />
      <Body
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        getTableBodyProps={getTableBodyProps}
        page={page}
        prepareRow={prepareRow}
        isLoading={isLoading}
        errorMessage={errorMessage}
        setCars={setCars}
        setErrorMessage={setErrorMessage}
        setIsLoading={setIsLoading}
      />
      <Pagination
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        gotoPage={gotoPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
      />
    </Stack >
  )
}

export default CarInventoryTable;