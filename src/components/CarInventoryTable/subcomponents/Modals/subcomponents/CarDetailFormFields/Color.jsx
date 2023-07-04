import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const Color = ({ carDetails, setCarDetails, styleProps }) => {
  return (
    <FormControl {...styleProps}>
      <FormLabel>Color</FormLabel>
      <Input
        type='text'
        value={carDetails.car_color}
        onChange={(e) => {
          setCarDetails({ ...carDetails, car_color: e.target.value })
        }}
      />
    </FormControl>
  )
}

export default Color;