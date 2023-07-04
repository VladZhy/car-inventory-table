import { FormControl, FormLabel, Select } from '@chakra-ui/react';

const Availability = ({ carDetails, setCarDetails, styleProps }) => {
  return (
    <FormControl {...styleProps}>
      <FormLabel>Availability</FormLabel>
      <Select
        value={carDetails.availability}
        onChange={(e) => {
          setCarDetails({ ...carDetails, availability: e.target.value })
        }}
      >
        <option value='In stock'>In stock</option>
        <option value='Out of stock'>Out of stock</option>
      </Select>
    </FormControl>
  )
}

export default Availability;