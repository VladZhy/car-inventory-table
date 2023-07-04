import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const Company = ({ carDetails, setCarDetails, styleProps }) => {
  return (
    <FormControl {...styleProps}>
      <FormLabel>Company</FormLabel>
      <Input
        type='text'
        value={carDetails.car}
        onChange={(e) => {
          setCarDetails({ ...carDetails, car: e.target.value })
        }}
      />
    </FormControl>
  )
}

export default Company;