import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
  Text
} from '@chakra-ui/react';

const GoToPage = ({ gotoPage, totalPages }) => {
  return (
    <Stack alignItems='center' direction='row'>
      <Text fontSize='lg'>Go to page:</Text>
      <NumberInput
        size='lg'
        maxW={24}
        min={1}
        max={totalPages}
        defaultValue={1}
        onChange={(value) => {
          gotoPage(value - 1)
        }}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Stack>
  )
}

export default GoToPage;