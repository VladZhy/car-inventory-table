import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const CarModel = ({ carDetails, setCarDetails, styleProps }) => {
  return (
    <FormControl {...styleProps}>
      <FormLabel>Car model</FormLabel>
      <Input
        type='text'
        value={carDetails.car_model}
        onChange={(e) => {
          setCarDetails({ ...carDetails, car_model: e.target.value })
        }}
      />
    </FormControl>
  )
}

export default CarModel;