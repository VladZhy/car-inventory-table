import { IconButton, Stack, Text } from '@chakra-ui/react';
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from '@chakra-ui/icons';

const Controls = ({
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  gotoPage,
  pageIndex,
  totalPages
}) => {
  return (
    <Stack alignItems='center' direction='row'>
      <IconButton
        aria-label='First page'
        colorScheme='purple'
        icon={<ArrowLeftIcon />}
        isDisabled={!canPreviousPage}
        onClick={() => gotoPage(0)}
      />
      <IconButton
        aria-label='Previous page'
        colorScheme='purple'
        icon={<ArrowBackIcon />}
        isDisabled={!canPreviousPage}
        onClick={() => previousPage()}
      />
      <Text fontSize='lg'>
        {`Page ${pageIndex + 1} of ${totalPages}`}
      </Text>
      <IconButton
        aria-label='Next page'
        colorScheme='purple'
        icon={<ArrowForwardIcon />}
        isDisabled={!canNextPage}
        onClick={() => nextPage()}
      />
      <IconButton
        aria-label='Last page'
        colorScheme='purple'
        icon={<ArrowRightIcon />}
        isDisabled={!canNextPage}
        onClick={() => gotoPage(totalPages - 1)}
      />
    </Stack>
  )
}

export default Controls;