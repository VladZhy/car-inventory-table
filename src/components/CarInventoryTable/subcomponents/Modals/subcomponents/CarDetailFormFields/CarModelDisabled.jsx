import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const CarModelDisabled = ({ carModel, styleProps }) => {
  return (
    <FormControl {...styleProps}>
      <FormLabel>Car model</FormLabel>
      <Input
        type='text'
        isDisabled={true}
        value={carModel}
      />
    </FormControl>
  )
}

export default CarModelDisabled;