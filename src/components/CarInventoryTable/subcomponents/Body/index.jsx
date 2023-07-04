import { Flex, Spinner } from '@chakra-ui/react';
import { ErrorMessage, TableView } from './subcomponents';

const Body = ({
  getTableProps,
  headerGroups,
  getTableBodyProps,
  page,
  prepareRow,
  isLoading,
  errorMessage,
  setCars,
  setErrorMessage,
  setIsLoading
}) => {
  return (
    (isLoading || errorMessage) ? (
      <Flex justify='center' align='center' height='50vh'>
        {isLoading ? (
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='purple.500'
            size='xl'
          />
        ) : (
          <ErrorMessage
            errorMessage={errorMessage}
            setCars={setCars}
            setErrorMessage={setErrorMessage}
            setIsLoading={setIsLoading}
          />
        )}
      </Flex>
    ) : (
      <TableView
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        getTableBodyProps={getTableBodyProps}
        page={page}
        prepareRow={prepareRow}
      />
    )
  )
}

export default Body;