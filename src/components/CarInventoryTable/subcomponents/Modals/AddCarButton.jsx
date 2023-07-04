import { every, cloneDeep } from 'lodash';
import { useEffect, useState } from 'react';
import { useCarDetails } from './hooks';
import { EMPTY_CAR_DETAILS } from '../../config';
import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  useDisclosure
} from '@chakra-ui/react';
import {
  Availability,
  CarModel,
  Color,
  Company,
  Price,
  VIN,
  Year
} from './subcomponents/CarDetailFormFields';

const AddCarButton = ({ cars, setCars }) => {
  const [carDetails, setCarDetails] = useState(cloneDeep(EMPTY_CAR_DETAILS));
  const [isEveryCarDetailFilled, setIsEveryCarDetailFilled] = useState(false);
  const { carDetailsToCar, generateCarId } = useCarDetails();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCloseModal = () => {
    setCarDetails(EMPTY_CAR_DETAILS);
    onClose();
  }

  const handleAddCar = () => {
    const newCar = carDetailsToCar(carDetails);
    newCar.id = generateCarId(cars);

    setCars([...cars, newCar]);

    handleCloseModal();
  }

  useEffect(() => {
    setIsEveryCarDetailFilled(every(carDetails));
  }, [carDetails]);

  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme='purple' onClick={onOpen}>
        Add car
      </Button>

      <Modal isOpen={isOpen} onClose={handleCloseModal} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add car</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack direction='row'>
              <Company
                carDetails={carDetails}
                setCarDetails={setCarDetails}
              />
              <CarModel
                carDetails={carDetails}
                setCarDetails={setCarDetails}
              />
            </Stack>
            <Stack direction='row' mt={4}>
              <VIN
                carDetails={carDetails}
                setCarDetails={setCarDetails}
                styleProps={{ flex: 2 }}
              />
              <Color
                carDetails={carDetails}
                setCarDetails={setCarDetails}
                styleProps={{ flex: 1.2 }}
              />
              <Year
                carDetails={carDetails}
                setCarDetails={setCarDetails}
                styleProps={{ flex: 0.7 }}
              />
            </Stack>
            <Stack direction='row' mt={4}>
              <Price
                carDetails={carDetails}
                setCarDetails={setCarDetails}
              />
              <Availability
                carDetails={carDetails}
                setCarDetails={setCarDetails}
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              isDisabled={!isEveryCarDetailFilled}
              colorScheme='purple'
              mr={3}
              onClick={handleAddCar}
            >
              Add
            </Button>
            <Button onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddCarButton;