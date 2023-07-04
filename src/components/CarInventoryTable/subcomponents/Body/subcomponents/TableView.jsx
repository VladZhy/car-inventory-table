import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

const TableView = ({
  getTableProps,
  headerGroups,
  getTableBodyProps,
  page,
  prepareRow
}) => {
  return (
    <TableContainer border='1px' borderRadius={5} borderColor='purple'>
      <Table variant='striped' colorScheme='purple' {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th textAlign={'center'} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);

            return (
              <Tr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <Td textAlign={'center'} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Td>
                })}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer >
  )
}

export default TableView;