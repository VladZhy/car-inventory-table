import { isEqual, every, cloneDeep } from 'lodash';
import { useEffect, useState } from 'react';
import { useCarDetails } from './hooks';
import {
  Button,
  MenuItem,
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
  CarModelDisabled,
  Color,
  CompanyDisabled,
  Price,
  VINDisabled,
  YearDisabled
} from './subcomponents/CarDetailFormFields';

const EditCarMenuItem = ({ car, cars, setCars }) => {
  const { carDetailsToCar, carToCarDetails } = useCarDetails();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialCarDetails = carToCarDetails(car);
  const [editedCarDetails, setEditedCarDetails] = useState(cloneDeep(initialCarDetails));
  const [isCarDetailsEdited, setIsCarDetailsEdited] = useState(false);
  const [isEveryCarDetailFilled, setIsEveryCarDetailFilled] = useState(false);

  const handleCloseModal = () => {
    setEditedCarDetails(initialCarDetails);
    onClose();
  }

  const handleEditCar = () => {
    const editedCar = carDetailsToCar(editedCarDetails);

    setCars(cars.map((car) =>
      car.id !== editedCar.id ? car : editedCar
    ));

    onClose();
  }

  useEffect(() => {
    setIsCarDetailsEdited(!isEqual(editedCarDetails, initialCarDetails));
    setIsEveryCarDetailFilled(every(editedCarDetails));
  }, [editedCarDetails]);

  return (
    <>
      <MenuItem onClick={onOpen}>
        Edit
      </MenuItem>

      <Modal isOpen={isOpen} onClose={handleCloseModal} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit car</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack direction='row'>
              <CompanyDisabled
                company={editedCarDetails.car}
              />
              <CarModelDisabled
                carModel={editedCarDetails.car_model}
              />
            </Stack>
            <Stack direction='row' mt={4}>
              <VINDisabled
                vin={editedCarDetails.car_vin}
                styleProps={{ flex: 2 }}
              />
              <Color
                carDetails={editedCarDetails}
                setCarDetails={setEditedCarDetails}
                styleProps={{ flex: 1.2 }}
              />
              <YearDisabled
                year={editedCarDetails.car_model_year}
                styleProps={{ flex: 0.7 }}
              />
            </Stack>
            <Stack direction='row' mt={4}>
              <Price
                carDetails={editedCarDetails}
                setCarDetails={setEditedCarDetails}
              />
              <Availability
                carDetails={editedCarDetails}
                setCarDetails={setEditedCarDetails}
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              isDisabled={!isCarDetailsEdited || !isEveryCarDetailFilled}
              colorScheme='purple'
              mr={3}
              onClick={handleEditCar}
            >
              Save
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

export default EditCarMenuItem;