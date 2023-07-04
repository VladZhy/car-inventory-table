import { PAGE_SIZES } from '../../../config';
import { Select } from '@chakra-ui/react';

const PageSize = ({ pageSize, setPageSize }) => {
  return (
    <Select
      size='lg'
      maxW={32}
      value={pageSize}
      onChange={(e) =>
        setPageSize(Number(e.target.value))
      }
    >
      {PAGE_SIZES.map(pageSize => (
        <option key={pageSize} value={pageSize}>
          Show {pageSize}
        </option>
      ))}
    </Select>
  )
}

export default PageSize;