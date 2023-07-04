import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';

const Year = ({ carDetails, setCarDetails, styleProps }) => {
  return (
    <FormControl {...styleProps}>
      <FormLabel>Year</FormLabel>
      <NumberInput
        min={1900}
        max={new Date().getFullYear() + 1}
        value={carDetails.car_model_year}
        onChange={(value) => {
          setCarDetails({ ...carDetails, car_model_year: value })
        }}
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

export default Year;