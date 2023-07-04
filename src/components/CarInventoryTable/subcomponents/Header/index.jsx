import { Heading, Stack } from '@chakra-ui/react';
import { Search } from './subcomponents';
import { AddCarButton } from '../Modals';

const Header = ({ globalFilter, setGlobalFilter, cars, setCars }) => {
  return (
    <>
      <Heading>Car Inventory</Heading>
      <Stack direction='row' spacing={4} justifyContent="space-between">
        <Search filter={globalFilter} setFilter={setGlobalFilter} />
        <AddCarButton cars={cars} setCars={setCars} />
      </Stack>
    </>
  )
}

export default Header;