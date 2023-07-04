import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { SEARCH_DELAY_IN_MS } from '../../../config';

const Search = ({ filter, setFilter }) => {
  const [input, setInput] = useState(filter);

  const searchAfterDelay = useAsyncDebounce((value) => {
    setFilter(value || undefined)
  }, SEARCH_DELAY_IN_MS);

  const handleInput = (value) => {
    setInput(value);
    searchAfterDelay(value);
  }

  return (
    <Stack spacing={3}>
      <InputGroup w='340px'>
        <InputLeftElement pointerEvents='none'>
          <Search2Icon color='purple.300' />
        </InputLeftElement>
        <Input
          type='search'
          placeholder='Search...'
          value={input || ''}
          onChange={(e) => {
            handleInput(e.target.value)
          }}
        />
      </InputGroup>
    </Stack>
  )
}

export default Search;