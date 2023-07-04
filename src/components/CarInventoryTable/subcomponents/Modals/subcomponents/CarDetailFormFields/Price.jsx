import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';

const Price = ({ carDetails, setCarDetails, styleProps }) => {
  return (
    <FormControl {...styleProps}>
      <FormLabel>Price (USD)</FormLabel>
      <NumberInput
        min={0.00}
        precision={2}
        step={0.01}
        value={carDetails.price}
        onChange={(value) => {
          setCarDetails({ ...carDetails, price: value })
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

export default Price;