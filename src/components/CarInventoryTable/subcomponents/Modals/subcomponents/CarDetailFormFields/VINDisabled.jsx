import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const VINDisabled = ({ vin, styleProps }) => {
  return (
    <FormControl {...styleProps}>
      <FormLabel>VIN</FormLabel>
      <Input
        type='text'
        isDisabled={true}
        value={vin}
      />
    </FormControl>
  )
}

export default VINDisabled;