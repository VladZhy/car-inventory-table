import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const CompanyDisabled = ({ company, styleProps }) => {
  return (
    <FormControl {...styleProps}>
      <FormLabel>Company</FormLabel>
      <Input
        type='text'
        isDisabled={true}
        value={company}
      />
    </FormControl>
  )
}

export default CompanyDisabled;