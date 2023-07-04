import { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  MenuItem,
  useDisclosure
} from '@chakra-ui/react';

const DeleteCarMenuItem = ({ id, cars, setCars }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const handleDeleteCar = () => {
    setCars(cars.filter((car) => car.id !== id));
    onClose();
  }

  return (
    <>
      <MenuItem onClick={onOpen}>
        Delete
      </MenuItem>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete car
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You can't undo this action.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleDeleteCar} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteCarMenuItem;