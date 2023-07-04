import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { DeleteCarMenuItem, EditCarMenuItem } from '../Modals';

const ActionsDropdown = ({ car, cars, setCars }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='purple'>
        Select action
      </MenuButton>
      <MenuList p={1} minW="120px" w={'140px'}>
        <EditCarMenuItem car={car} cars={cars} setCars={setCars} />
        <DeleteCarMenuItem id={car.id} cars={cars} setCars={setCars} />
      </MenuList>
    </Menu>
  )
}

export default ActionsDropdown;