import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const VIN = ({ carDetails, setCarDetails, styleProps }) => {
  return (
    <FormControl {...styleProps}>
      <FormLabel>VIN</FormLabel>
      <Input
        type='text'
        value={carDetails.car_vin}
        onChange={(e) => {
          setCarDetails({ ...carDetails, car_vin: e.target.value })
        }}
      />
    </FormControl>
  )
}

export default VIN;