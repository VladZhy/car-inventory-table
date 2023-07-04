import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';

const YearDisabled = ({ year, styleProps }) => {
  return (
    <FormControl {...styleProps}>
      <FormLabel>Year</FormLabel>
      <NumberInput
        isDisabled={true}
        min={1900}
        max={new Date().getFullYear() + 1}
        value={year}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  )
}

export default YearDisabled;