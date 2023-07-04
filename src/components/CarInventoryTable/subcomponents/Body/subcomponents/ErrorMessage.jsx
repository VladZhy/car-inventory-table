import { Button, Stack, Text } from '@chakra-ui/react';
import { useCars } from '../../../hooks';

const ErrorMessage = ({ errorMessage, setCars, setErrorMessage, setIsLoading }) => {
  const { fetchCars } = useCars();

  const handleTryAgain = () => {
    setIsLoading(true);
    setErrorMessage('');
    fetchCars(setCars, setErrorMessage, setIsLoading);
  }

  return (
    <Stack align='center'>
      <Text fontSize='lg'>Couldn't fetch data: {errorMessage}</Text>
      <Button w='120px' colorScheme='purple' onClick={handleTryAgain}>
        Try again
      </Button>
    </Stack>
  )
}

export default ErrorMessage;